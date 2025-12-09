import{j as r,r as x}from"./iframe-D29QVi29.js";import{b as m,u as a,F as p,t as E}from"./Form-NpVZHmv0.js";import{L as s}from"./Label-7gHNx5q_.js";import{R as u,S as c}from"./ResetButton-4cumsBRi.js";import{B as l}from"./Button-BqO8ZFSe.js";import{S as j,s as d}from"./Section-N6-W-jGX.js";import{A as b}from"./ActionGroup-DBGYrkNa.js";import{r as n,g}from"./TimeField-lp3G4cvL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BIIctUHv.js";import"./PropsContextProvider-Di3M49gZ.js";import"./mergeRefs-Dxk1BzaE.js";import"./index-CR8Graxx.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Bqmt488r.js";import"./context-qGV7OOPv.js";import"./browser-CsgOcZeL.js";import"./utils-V6v5WZV5.js";import"./ProgressBar-1j73270Z.js";import"./Hidden-DYWDaDdl.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-qRr2EWc4.js";import"./Text-BTGWwOlA.js";import"./EmulatedBoldText-C5bjRzZR.js";import"./LoadingSpinner-BK6n1zCV.js";import"./Button-x1GyynEX.js";import"./useFocusRing-BTna3mEs.js";import"./useFocusable-DTRRpH6w.js";import"./context-i3-N7LSR.js";import"./RSPContexts-7wLun1z_.js";import"./Collection-BnP1T9jt.js";import"./CollectionBuilder-DjTeQogG.js";import"./SelectionIndicator-T7jZrYkx.js";import"./Separator-CwRYG8QD.js";import"./useStatic-lipZmjhB.js";import"./Accordion-pcyhtlWY.js";import"./Alert-ktnaCpLp.js";import"./AlertIcon-kk-UzcPM.js";import"./AlertBadge-BD8zfIUZ.js";import"./Align-BtSVJIfv.js";import"./Popover-0dSAyS70.js";import"./OverlayTrigger-BRRbGelm.js";import"./TableFooterRow-CA8NF4Dq.js";import"./SkeletonText-DmNXdtlf.js";import"./Avatar-DdRZEOpi.js";import"./AvatarStack-ByHEeQa7.js";import"./Badge-CVEppqDk.js";import"./BigNumber-Bg1ofazi.js";import"./Breadcrumb-BF3l43g2.js";import"./Link-BjYhTK1P.js";import"./Heading-DViBSNIF.js";import"./Legend-9054_P7x.js";import"./FileCardList-o4UnmRGi.js";import"./Image-BxoMCQ1N.js";import"./Color-B_L_jSYT.js";import"./Content-4wsi0omc.js";import"./ContextualHelpTrigger-BZZdrkgN.js";import"./CounterBadge-B6vj9Dqf.js";import"./DonutChart-48XA97RY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CFBYRPqa.js";import"./Header-5t7o3Hne.js";import"./Initials-C20rNA0F.js";import"./InlineCode-CkOTYzGC.js";import"./PopoverTrigger-lEvm5luT.js";import"./Separator-CUu_rnx_.js";import"./Message-CK6j6Y0e.js";import"./MessageSeparator-ZDTmypgR.js";import"./NavigationGroup-DpBlg96L.js";import"./Notification-CY5CezJs.js";import"./NotificationProvider-DYLCryBZ.js";import"./ProgressBar-DePOjU9y.js";import"./Rating-BloKNl8U.js";import"./Skeleton-CpVZIb00.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Kr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
