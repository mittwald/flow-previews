import{j as r,r as x}from"./iframe-B7faIpc2.js";import{b as p,u as c,F as a,t as F}from"./Form-DXc6FTdJ.js";import{R as l,S as h}from"./ResetButton-CZyTfOXA.js";import{B as d}from"./Button-C65qYEPV.js";import{S as j,s as u}from"./Section-BRbBI6XS.js";import{A as b}from"./ActionGroup-lrlsSsuG.js";import{s as t,g as E}from"./TimeField-DJeF6tHL.js";import"./index-nuYtCEEu.js";import"./dynamic-DNE-pYSI.js";import"./PropsContextProvider-DvcRwh-b.js";import"./mergeRefs-DocynWAk.js";import"./index-Cm9A5t92.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CHCbdM4l.js";import"./context-BdWnF-Tv.js";import"./browser-CF6H-xjM.js";import"./utils-Dgdioq7j.js";import"./IconWarning-RXBUNZpo.js";import"./Text-BW5jU57O.js";import"./EmulatedBoldText-C1Px7vMV.js";import"./LoadingSpinner-mrsqqnDm.js";import"./Button-Br-rQQva.js";import"./ProgressBar-Cpr3Nm-I.js";import"./Hidden-CI4Kyuw4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BnSOUYVK.js";import"./useFocusable-BknYbShF.js";import"./context-BRyJJeXK.js";import"./RSPContexts-Bww9Tcci.js";import"./Collection-B_b9uSvy.js";import"./CollectionBuilder-BF29HNem.js";import"./SelectionIndicator-CVtQG64z.js";import"./Separator-BwGATjgB.js";import"./useStatic-d3wvmCdr.js";import"./Accordion-rRmjtL7-.js";import"./Alert-CsDQ-kYA.js";import"./AlertIcon-BgMVJ-0R.js";import"./AlertBadge-C_NAxNEx.js";import"./Align-DuctyuK7.js";import"./Popover-QuqvLiOu.js";import"./OverlayTrigger-mzSlkfM-.js";import"./TableFooterRow-BTQIZIFr.js";import"./SkeletonText-C_Fa3H2l.js";import"./Avatar-Dz-cMFo8.js";import"./AvatarStack-2jPjq7st.js";import"./Badge-BaUtza3s.js";import"./BigNumber-BwNV7DHD.js";import"./Breadcrumb-D-mfdRHn.js";import"./Link-BlQ-A0kF.js";import"./Heading-DQAVgOUX.js";import"./Legend-DrznEJ0f.js";import"./FileCardList-BmGtRGBl.js";import"./Image-Cw48J6Ze.js";import"./Color-COLTRY34.js";import"./Content-DYfcwBs-.js";import"./Label-B8m3uYje.js";import"./ContextualHelpTrigger-CoqA6lQ-.js";import"./CounterBadge-Bnm06nVz.js";import"./DonutChart-B4IQzO-m.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-eNzO0zDz.js";import"./Header-1-tOwrUd.js";import"./Initials-D1wCqKzA.js";import"./InlineCode-SGGc6CuJ.js";import"./PopoverTrigger-Btq07Gqi.js";import"./Separator-iil9Ttbd.js";import"./Message-CsQsykjC.js";import"./MessageSeparator-4ehVw1iX.js";import"./NavigationGroup-DCa422EG.js";import"./Notification-CX0MhUUz.js";import"./NotificationProvider-BfOyISvO.js";import"./ProgressBar-CKWJYevm.js";import"./Rating-Dpmi2aI5.js";import"./Skeleton-C2W_Mk7n.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Lr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};
