import{j as r,r as F}from"./iframe-DjMRZ933.js";import{c as p,u as d,F as l,t as j}from"./Form-DE6VWUf-.js";import{L as o}from"./Label-DE4OEFg-.js";import{R as h,S as x}from"./ResetButton-CaELwfNw.js";import{B as u}from"./Button-DcZikGPu.js";import{S as g,s as c}from"./Section-Cfn_XoWh.js";import{A as b}from"./ActionGroup-7rrFpHFJ.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-B0eJEEhW.js";import"./index-nuYtCEEu.js";import"./dynamic-xmc70gpV.js";import"./PropsContextProvider-Dfc22Cns.js";import"./mergeRefs-ktNCKXcN.js";import"./index-CdoC4W9G.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D2Pb0dlM.js";import"./context-CMNm5Xu1.js";import"./browser-CRatz6fZ.js";import"./utils-ChD4yM7Z.js";import"./ProgressBar-B_WWkX7i.js";import"./Hidden-C2WyT6w-.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-15BQJDPi.js";import"./Text-HqedTJ3_.js";import"./EmulatedBoldText-B3brdLrg.js";import"./LoadingSpinner-fSHKWhSv.js";import"./Button-CVSjku2L.js";import"./useFocusRing-CsWAde4M.js";import"./useFocusable-DMUCbXde.js";import"./context-o3mGNPxn.js";import"./RSPContexts-xVWKxYWV.js";import"./Collection-N-WMj8Hm.js";import"./CollectionBuilder-B6_gBvnz.js";import"./SelectionIndicator-Be-dMYOv.js";import"./Separator-CDRx1yir.js";import"./useStatic-CBLHZfUJ.js";import"./getActionGroupSlot-CJeZWLnB.js";import"./Accordion-BZmsZnOt.js";import"./Alert-BcobEuUM.js";import"./AlertIcon-DmCm2LWR.js";import"./AlertBadge-CHwJpuCJ.js";import"./Align-BzDEdRIo.js";import"./Popover-C5QNOwBo.js";import"./OverlayTrigger-CrRJgUZu.js";import"./TableFooterRow-B6PT5pbR.js";import"./SkeletonText-CI93CBea.js";import"./Avatar-BB63liah.js";import"./AvatarStack-B8FhdVad.js";import"./Badge-BN0x96Ky.js";import"./BigNumber-BSqhFP9i.js";import"./Breadcrumb-nMuJg0z4.js";import"./Link-ejox3cBD.js";import"./Heading-BgHZ1ILD.js";import"./Legend-DF5rtCao.js";import"./FileCardList-TQMS-z_x.js";import"./Image-wUfga1_8.js";import"./Color-BWZ1Dr8p.js";import"./Content-Bcc-jBqm.js";import"./ContextualHelpTrigger-CYoOPEVY.js";import"./CounterBadge-CAliY95s.js";import"./DonutChart-DDKsyr_O.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrAWYJ7k.js";import"./Header-DCu3M0y9.js";import"./Initials-TwtEiJm8.js";import"./InlineCode-CKS5wrww.js";import"./PopoverTrigger-DbAiM7NS.js";import"./Separator-sHJV27kT.js";import"./Message-DoIB20zo.js";import"./MessageSeparator-l8_oHDYV.js";import"./NavigationGroup-DRmGCyXC.js";import"./Notification-DGagkD2g.js";import"./NotificationProvider-BQSRGQyP.js";import"./ProgressBar-BaViBzGB.js";import"./Rating-CYR_1TdL.js";import"./Skeleton-IgaQ_QZW.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Yr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await c(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
