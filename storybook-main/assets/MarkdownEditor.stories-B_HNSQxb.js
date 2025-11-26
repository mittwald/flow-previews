import{j as r,r as x}from"./iframe-D9CYFPXr.js";import{b as m,u as a,F as p,t as E}from"./Form-BNmwIDs0.js";import{L as s}from"./Label-CzxcXiJX.js";import{R as u,S as c}from"./ResetButton-DJ1KjM7J.js";import{B as l}from"./Button-CT-xyYfH.js";import{S as j,s as d}from"./Section-CA0EDsnV.js";import{A as b}from"./ActionGroup-Ccd39lHI.js";import{r as n,g}from"./TimeField-BkJlZcm0.js";import"./index-nuYtCEEu.js";import"./dynamic-SXs7A3g7.js";import"./PropsContextProvider-C-2riE67.js";import"./mergeRefs-vtU4phNc.js";import"./index-U9K-BUpK.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-S4nfhuc7.js";import"./context-Dx6KMOks.js";import"./browser-D2ZJCi1x.js";import"./utils-yR_DAamg.js";import"./ProgressBar-bCwxisfs.js";import"./Hidden-CwV9BSsN.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-jXguM53C.js";import"./Text-DJSjVfmJ.js";import"./EmulatedBoldText-BO0x8ST2.js";import"./LoadingSpinner-gB0VXrmM.js";import"./Button-DG6HuID3.js";import"./useFocusRing-DS6hlMbf.js";import"./useFocusable--HhDjXRb.js";import"./context-COeqZE1E.js";import"./RSPContexts-CiawBZSO.js";import"./Collection-D-Uil-_a.js";import"./CollectionBuilder-DI5MHw1U.js";import"./SelectionIndicator-IjsyYsuv.js";import"./Separator-Do2CJS7r.js";import"./useStatic-DvORlamL.js";import"./Accordion-BArRtOTS.js";import"./Alert-CyjiVY23.js";import"./AlertIcon-8Ocv2v3H.js";import"./AlertBadge-CRoJOsK9.js";import"./Align-CLrsPfYt.js";import"./Popover-BNCnXQAV.js";import"./OverlayTrigger-CUUjZI6u.js";import"./TableFooterRow-OQSmAD90.js";import"./SkeletonText-Dmouj86v.js";import"./Avatar-BkdvaG88.js";import"./AvatarStack-C3tebcLD.js";import"./Badge-C2tMlnMT.js";import"./BigNumber-ijILQR_w.js";import"./Breadcrumb-BxUPCHCP.js";import"./Link-Bm2iZsG_.js";import"./Heading-CavYhFH8.js";import"./Legend-DtDM-qUx.js";import"./FileCardList-D5Ru0u2M.js";import"./Image-DgZNHogz.js";import"./Color-ykv-EnxY.js";import"./Content-2XO0f1sV.js";import"./ContextualHelpTrigger-Cks81a1U.js";import"./CounterBadge-V16geG9B.js";import"./DonutChart-D89z5kPJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C5cgRyU-.js";import"./Header-qxJ8AaGd.js";import"./Initials-ft2Izcj0.js";import"./InlineCode-CDcWeZk1.js";import"./PopoverTrigger-CVb4_ztY.js";import"./Separator-BrIDoq1X.js";import"./Message-BoLQMEmF.js";import"./MessageSeparator-CgZcEmeT.js";import"./NavigationGroup-CXptzVeF.js";import"./Notification-Kh0NRtbz.js";import"./NotificationProvider-BfspMVKw.js";import"./ProgressBar-B-qkFYl5.js";import"./Rating-D8qxWgHK.js";import"./Skeleton-BBVDwrbz.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
