import{j as r,r as F}from"./iframe-BqP6npnu.js";import{b as p,u as d,F as l,t as j}from"./Form-D7KFnqtM.js";import{L as o}from"./Label-Dvn9fxen.js";import{R as h,S as x}from"./ResetButton-Br_fJDuM.js";import{B as c}from"./Button-CINxW6TG.js";import{S as g,s as u}from"./Section-BgyjzhPc.js";import{A as b}from"./ActionGroup-DkEZCvBM.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-CfFM0LAi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-S48VUeic.js";import"./PropsContextProvider-r-rgdyuu.js";import"./mergeRefs-BMwdHSSJ.js";import"./index-Bfa1LViZ.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BHml1YCA.js";import"./context-Dpv25OMu.js";import"./browser-DXN0P2CK.js";import"./utils-Co5LfTVH.js";import"./ProgressBar-DCp0FWd7.js";import"./Hidden-s6oF_Zfg.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DbZ28gHF.js";import"./remote-CSf0dxK4.js";import"./Text-DywGJIRt.js";import"./EmulatedBoldText-Htc9gLg0.js";import"./LoadingSpinner-C4lBONmO.js";import"./Button-Cqxj8v2u.js";import"./useFocusRing-D-9NYYvk.js";import"./useFocusable-CcDlosxd.js";import"./context-WZRL0rNv.js";import"./RSPContexts-DNFW1N-a.js";import"./Collection-DiwcfHI2.js";import"./CollectionBuilder-Bxx5R3mQ.js";import"./SelectionIndicator-C0u1Mx-Z.js";import"./Separator-CD09dtZh.js";import"./useStatic-BDpTt2fP.js";import"./Accordion-spl5epLr.js";import"./Alert-DDe2aHVZ.js";import"./AlertIcon-D6OwT7OR.js";import"./AlertBadge-BDjWZOe3.js";import"./Align-DGoxUnnr.js";import"./Popover-weX1_5w_.js";import"./OverlayTrigger-kHGfUlCD.js";import"./TableFooterRow-DE-kA3m3.js";import"./SkeletonText-wjzRGxSG.js";import"./Avatar-CG6X940b.js";import"./AvatarStack-CGiknhkD.js";import"./Badge-CbvcsGSe.js";import"./BigNumber-CbaoHXSC.js";import"./Breadcrumb-Bk12IqNH.js";import"./Link-d1M47Kmn.js";import"./Heading-Dc3wJcTH.js";import"./Legend-CLq0DkHM.js";import"./FileCardList-CMNbaDEr.js";import"./Image-Bzt2Nbsw.js";import"./Color-B6n4dvbc.js";import"./Content-Dz6fNrX7.js";import"./ContextualHelpTrigger-CYLItONs.js";import"./CounterBadge-shrozi75.js";import"./DonutChart-CHPfrUyM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Ccc6Ijre.js";import"./Header-CiylrxZe.js";import"./Initials-Bcwc3vJF.js";import"./InlineCode-BUxkWh74.js";import"./PopoverTrigger-gkUZ0oSI.js";import"./Separator-CATwKm_c.js";import"./Message-D8K-Im88.js";import"./MessageSeparator-DNMph2bZ.js";import"./NavigationGroup-CsN8a96z.js";import"./Notification-Ddl9cNgw.js";import"./NotificationProvider-DI6lihFR.js";import"./ProgressBar-CMJ4ivwe.js";import"./Rating-1epREFBF.js";import"./Skeleton-CfQhGXNU.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Yr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
