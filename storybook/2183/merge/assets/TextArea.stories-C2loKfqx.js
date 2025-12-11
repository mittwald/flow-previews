import{j as r,r as F}from"./iframe-Bo-CC4om.js";import{b as p,u as d,F as l,t as j}from"./Form-BUpNurWq.js";import{L as o}from"./Label-DRQE_3kZ.js";import{R as h,S as x}from"./ResetButton-CBw-4Fdn.js";import{B as c}from"./Button-DsbAYxy6.js";import{S as g,s as u}from"./Section-BSzb61PI.js";import{A as b}from"./ActionGroup-DmuV-_zy.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-C-GOyraa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DI9mkNr1.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./context-DUzMMmSG.js";import"./browser-CQUdwXOL.js";import"./utils-BE4vzmGc.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B7qIXHf5.js";import"./remote-B4cOsRJO.js";import"./Text-FWtYFqa_.js";import"./EmulatedBoldText-DaZX5sg6.js";import"./LoadingSpinner-U2Qf3euF.js";import"./Button-DEzwtm5X.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./context-Dp75aXTI.js";import"./RSPContexts-BIpJdst2.js";import"./Collection-D6MbkC5o.js";import"./CollectionBuilder-B0V3ZRNt.js";import"./SelectionIndicator-BLd_vFKr.js";import"./Separator-BoV_7H5z.js";import"./useStatic-CUzdYRpB.js";import"./Accordion-9Le9yhf_.js";import"./Alert-Dt_4j8QW.js";import"./AlertIcon-mGxxCUjy.js";import"./AlertBadge-BIsElKxu.js";import"./Align-2Rvfe-vL.js";import"./Popover-CuQlxumw.js";import"./OverlayTrigger-CdAPQ6Lz.js";import"./TableFooterRow-rYWUUYPE.js";import"./SkeletonText-Cawt_Liw.js";import"./Avatar-DZgOazPv.js";import"./AvatarStack-CK7V-CZy.js";import"./Badge-KHAUUQ1g.js";import"./BigNumber-BPcM1V5W.js";import"./Breadcrumb-BdPm70-C.js";import"./Link-Cjmbqaeu.js";import"./Heading-BHjCTnZi.js";import"./Legend-BJJJjizN.js";import"./FileCardList-Ns0-bzlM.js";import"./Image-DWyBIzwU.js";import"./Color-B9W2SphA.js";import"./Content-DkmAOWWJ.js";import"./ContextualHelpTrigger-qV88HZ0Q.js";import"./CounterBadge-DrxirSEd.js";import"./DonutChart-r4Ym1MHi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DvV3W6_m.js";import"./Header-DX79Odlg.js";import"./Initials-c31qSACO.js";import"./InlineCode-WgY9VQ0d.js";import"./PopoverTrigger--EGMIntl.js";import"./Separator-Tuz6Qj0k.js";import"./Message-DwvTL-MT.js";import"./MessageSeparator-BmmOSADd.js";import"./NavigationGroup-BfArZJF_.js";import"./Notification-CxiWXGjP.js";import"./NotificationProvider-ev7yt2lS.js";import"./ProgressBar-Y54IGAK3.js";import"./Rating-D6chMOWs.js";import"./Skeleton-Bnf_ayGA.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Yr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
