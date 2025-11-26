import{j as r,r as x}from"./iframe-B7faIpc2.js";import{b as m,u as a,F as p,t as E}from"./Form-DXc6FTdJ.js";import{L as s}from"./Label-B8m3uYje.js";import{R as u,S as c}from"./ResetButton-CZyTfOXA.js";import{B as l}from"./Button-C65qYEPV.js";import{S as j,s as d}from"./Section-BRbBI6XS.js";import{A as b}from"./ActionGroup-lrlsSsuG.js";import{r as n,g}from"./TimeField-DJeF6tHL.js";import"./index-nuYtCEEu.js";import"./dynamic-DNE-pYSI.js";import"./PropsContextProvider-DvcRwh-b.js";import"./mergeRefs-DocynWAk.js";import"./index-Cm9A5t92.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CHCbdM4l.js";import"./context-BdWnF-Tv.js";import"./browser-CF6H-xjM.js";import"./utils-Dgdioq7j.js";import"./ProgressBar-Cpr3Nm-I.js";import"./Hidden-CI4Kyuw4.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-RXBUNZpo.js";import"./Text-BW5jU57O.js";import"./EmulatedBoldText-C1Px7vMV.js";import"./LoadingSpinner-mrsqqnDm.js";import"./Button-Br-rQQva.js";import"./useFocusRing-BnSOUYVK.js";import"./useFocusable-BknYbShF.js";import"./context-BRyJJeXK.js";import"./RSPContexts-Bww9Tcci.js";import"./Collection-B_b9uSvy.js";import"./CollectionBuilder-BF29HNem.js";import"./SelectionIndicator-CVtQG64z.js";import"./Separator-BwGATjgB.js";import"./useStatic-d3wvmCdr.js";import"./Accordion-rRmjtL7-.js";import"./Alert-CsDQ-kYA.js";import"./AlertIcon-BgMVJ-0R.js";import"./AlertBadge-C_NAxNEx.js";import"./Align-DuctyuK7.js";import"./Popover-QuqvLiOu.js";import"./OverlayTrigger-mzSlkfM-.js";import"./TableFooterRow-BTQIZIFr.js";import"./SkeletonText-C_Fa3H2l.js";import"./Avatar-Dz-cMFo8.js";import"./AvatarStack-2jPjq7st.js";import"./Badge-BaUtza3s.js";import"./BigNumber-BwNV7DHD.js";import"./Breadcrumb-D-mfdRHn.js";import"./Link-BlQ-A0kF.js";import"./Heading-DQAVgOUX.js";import"./Legend-DrznEJ0f.js";import"./FileCardList-BmGtRGBl.js";import"./Image-Cw48J6Ze.js";import"./Color-COLTRY34.js";import"./Content-DYfcwBs-.js";import"./ContextualHelpTrigger-CoqA6lQ-.js";import"./CounterBadge-Bnm06nVz.js";import"./DonutChart-B4IQzO-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-eNzO0zDz.js";import"./Header-1-tOwrUd.js";import"./Initials-D1wCqKzA.js";import"./InlineCode-SGGc6CuJ.js";import"./PopoverTrigger-Btq07Gqi.js";import"./Separator-iil9Ttbd.js";import"./Message-CsQsykjC.js";import"./MessageSeparator-4ehVw1iX.js";import"./NavigationGroup-DCa422EG.js";import"./Notification-CX0MhUUz.js";import"./NotificationProvider-BfOyISvO.js";import"./ProgressBar-CKWJYevm.js";import"./Rating-Dpmi2aI5.js";import"./Skeleton-C2W_Mk7n.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Nr as __namedExportsOrder,Kr as default};
