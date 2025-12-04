import{j as r,r as F}from"./iframe-HbHx0dbr.js";import{b as p,u as d,F as l,t as j}from"./Form-MbwGaAJo.js";import{L as o}from"./Label-VVCD1n3I.js";import{R as h,S as x}from"./ResetButton-CU0OPB9N.js";import{B as c}from"./Button-CJvGBAVv.js";import{S as g,s as u}from"./Section-qE36af1s.js";import{A as b}from"./ActionGroup-CSmxA-fN.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-BLEhWuna.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CRi6gEUI.js";import"./PropsContextProvider-qzVrzUzc.js";import"./mergeRefs-D-Oz7bso.js";import"./index-CFmzddZU.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D03WI-to.js";import"./context-B1asaoMu.js";import"./browser-CXwhmTUt.js";import"./utils-CsDSVDn1.js";import"./ProgressBar-DgngiXRE.js";import"./Hidden-DneGUX_i.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DPh3xjyu.js";import"./Text-CkAqcx4z.js";import"./EmulatedBoldText-Bfs6I3BJ.js";import"./LoadingSpinner-I5GkEDRC.js";import"./Button-CId--e-F.js";import"./useFocusRing-ChjTo6T2.js";import"./useFocusable-DI6pzLi-.js";import"./context-CWzv3puv.js";import"./RSPContexts-B_V-VNLp.js";import"./Collection-fVAw7-GX.js";import"./CollectionBuilder-9ah2FshN.js";import"./SelectionIndicator-CFpgfv2c.js";import"./Separator-BKx97MTe.js";import"./useStatic-BpR7MYw1.js";import"./Accordion-Cwt2fJuI.js";import"./Alert-CbU_YA_s.js";import"./AlertIcon-C6IAHzWi.js";import"./AlertBadge-fEpk4vNR.js";import"./Align-BAwYX1Nz.js";import"./Popover-CJs7Vohs.js";import"./OverlayTrigger-CSEkhglm.js";import"./TableFooterRow-Dxi7XPrZ.js";import"./SkeletonText-S65PrCT7.js";import"./Avatar-JTrpRsew.js";import"./AvatarStack-CSJDeeUe.js";import"./Badge-CX4hh3lM.js";import"./BigNumber-BJXYLVAq.js";import"./Breadcrumb---Gml5SM.js";import"./Link-COwhy3J8.js";import"./Heading-DMPTZuUQ.js";import"./Legend-BwAXmxEK.js";import"./FileCardList-BbAMywa1.js";import"./Image-BUcGulw7.js";import"./Color-ByIQXf4O.js";import"./Content-C349RzEO.js";import"./ContextualHelpTrigger-BipkOUK_.js";import"./CounterBadge-N87a1HO-.js";import"./DonutChart-BGqYnoyK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-bUnPZbIJ.js";import"./Header-DefiEy2z.js";import"./Initials-Du-nuxgE.js";import"./InlineCode-DJLgs5TT.js";import"./PopoverTrigger-CHVTJqWF.js";import"./Separator-BhsBp5gG.js";import"./Message-C6tvgpf9.js";import"./MessageSeparator-DbNKZGcR.js";import"./NavigationGroup-DC8ViXMv.js";import"./Notification-DEJbziLS.js";import"./NotificationProvider-BOVzW3FW.js";import"./ProgressBar-cZpj8lZD.js";import"./Rating-EYgTbQvW.js";import"./Skeleton-Bn8XpxuJ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ur={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Yr as __namedExportsOrder,Ur as default};
