import{j as r,r as F}from"./iframe-b3Ga2wpf.js";import{b as p,u as d,F as l,t as j}from"./Form-DtrXwySn.js";import{L as o}from"./Label-BM4rj9TZ.js";import{R as h,S as x}from"./ResetButton-Db35grC4.js";import{B as c}from"./Button-B9AKUFf2.js";import{S as g,s as u}from"./Section-DpTqM0_J.js";import{A as b}from"./ActionGroup-C8Oe2XUd.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-CtNImo6o.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7f7XAFP.js";import"./PropsContextProvider-D77bvxtu.js";import"./mergeRefs-Bi5mFM62.js";import"./index-EgQfkxQH.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Dw2puoxj.js";import"./context-D39ROL5s.js";import"./browser-C0SY9BaM.js";import"./utils-DpwAoq2B.js";import"./ProgressBar-CqHSuyvS.js";import"./Hidden-D7Ffx1fO.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C84U4k_5.js";import"./remote-DrytLFaS.js";import"./Text-DIbSGP69.js";import"./EmulatedBoldText-BWSYK2_K.js";import"./LoadingSpinner-C8TYwtnu.js";import"./Button-Dn9RG0lS.js";import"./useFocusRing-DyTaHyNc.js";import"./useFocusable-CNSeA0E2.js";import"./context-DvKCdNAh.js";import"./RSPContexts-CzK-yBpk.js";import"./Collection-staaIP_8.js";import"./CollectionBuilder-DkVC1udd.js";import"./SelectionIndicator-H6x9m8Fd.js";import"./Separator-CC7MupLF.js";import"./useStatic-DjEoLORA.js";import"./Accordion-DJRFgKSV.js";import"./Alert-BFE5O_K9.js";import"./AlertIcon-BoIjIGQk.js";import"./AlertBadge-Dc59NCSn.js";import"./Align-DkScujGZ.js";import"./Popover-C3t-XhdJ.js";import"./OverlayTrigger-9eU9gIuc.js";import"./TableFooterRow-CtVIdWAI.js";import"./SkeletonText-6MyMR-o8.js";import"./Avatar-DRdoqq5g.js";import"./AvatarStack-Bm59_WJp.js";import"./Badge-CmiaY70P.js";import"./BigNumber-jt1NPm7F.js";import"./Breadcrumb-BZ7G-TEM.js";import"./Link-fVLJAih1.js";import"./Heading-BGN7eCNA.js";import"./Legend-BeSc5K-M.js";import"./FileCardList-Cu-7JGuA.js";import"./Image-pfb7qnpC.js";import"./Color-q6pWurkX.js";import"./Content-CZqLB91a.js";import"./ContextualHelpTrigger-B4h5NCtb.js";import"./CounterBadge-Dnci99L1.js";import"./DonutChart-D0dIo1ZK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Dp1INIeU.js";import"./Header-HXXe6hHp.js";import"./Initials-BTQbHA9Y.js";import"./InlineCode-BynVVMmO.js";import"./PopoverTrigger-aR-yTA7m.js";import"./Separator-C1t0NjGv.js";import"./Message-CJlFlLd8.js";import"./MessageSeparator-Dfvdn_tJ.js";import"./NavigationGroup-gO8yiDJt.js";import"./Notification-Biyx_ImO.js";import"./NotificationProvider-CZZ8UITu.js";import"./ProgressBar-DU1jY53e.js";import"./Rating-C6_n-TNa.js";import"./Skeleton-DwbvfRV4.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Yr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,zr as __namedExportsOrder,Yr as default};
