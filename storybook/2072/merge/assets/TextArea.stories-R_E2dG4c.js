import{j as r,r as F}from"./iframe-MIgL3t-o.js";import{b as p,u as d,F as l,t as j}from"./Form-xa0y_dIF.js";import{L as o}from"./Label-DND0p0GF.js";import{R as h,S as x}from"./ResetButton-Dar3knML.js";import{B as c}from"./Button-Bm-VICQC.js";import{S as g,s as u}from"./Section-DSxo8JPS.js";import{A as b}from"./ActionGroup-DbS5du-g.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-BFURGqwq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-T1pzav9P.js";import"./PropsContextProvider-D08VhguK.js";import"./mergeRefs-DFlQ0eaD.js";import"./index-D5QMlcQF.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D7iWn3FU.js";import"./context-BN8VYe9y.js";import"./browser-ZlggRhGh.js";import"./utils-DBPvjchL.js";import"./ProgressBar-B2x1EXTK.js";import"./Hidden-DewfgLfM.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CaixpT4r.js";import"./Text-CBtQMAPT.js";import"./EmulatedBoldText-DS7oXEiE.js";import"./LoadingSpinner-B8Zs_K9s.js";import"./Button-BoUtMxCQ.js";import"./useFocusRing-qMh6fvoq.js";import"./useFocusable-LR8FLvJr.js";import"./context-BpnnESCC.js";import"./RSPContexts-ByAL28zK.js";import"./Collection--DnqN1NB.js";import"./CollectionBuilder-49chxnhy.js";import"./SelectionIndicator-BNvv8rtj.js";import"./Separator-BNhZRG5D.js";import"./useStatic-Drcz9tkt.js";import"./Accordion-7dsQrpkO.js";import"./Alert-DsqqMK6J.js";import"./AlertIcon-Cr2UlT4F.js";import"./AlertBadge-C2q-OhWS.js";import"./Align-Bpq8YyVH.js";import"./Popover-CB28VzMp.js";import"./OverlayTrigger-BTgo3ogI.js";import"./TableFooterRow-1wnszgLS.js";import"./SkeletonText-DSGRe1mp.js";import"./Avatar-COceV_It.js";import"./AvatarStack-B6vmc5su.js";import"./Badge-cRRWToon.js";import"./BigNumber-CK9gyGUq.js";import"./Breadcrumb-Z996jVAQ.js";import"./Link-e4nLwp4o.js";import"./Heading-BGfwvjE9.js";import"./Legend-BggJIFX2.js";import"./FileCardList-C-TQ3fUn.js";import"./Image-DAc7VsOT.js";import"./Color-_UsPKinm.js";import"./Content-6iLmORfW.js";import"./ContextualHelpTrigger-D-Yb9hBa.js";import"./CounterBadge-COZTsGXp.js";import"./DonutChart-DdGv6zP9.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DcofpUEQ.js";import"./Header-BMcQReSK.js";import"./Initials-Dgf_eP_2.js";import"./InlineCode-CpcRW1dM.js";import"./PopoverTrigger-bsw-s53Z.js";import"./Separator-B-iBVOSO.js";import"./Message-Chhe13yv.js";import"./MessageSeparator-C88ZuTHj.js";import"./NavigationGroup-tZPVhu6S.js";import"./Notification-Dr7sL_d0.js";import"./NotificationProvider-C92LmpC-.js";import"./ProgressBar-84Q58tlo.js";import"./Rating-1xjU0K14.js";import"./Skeleton-Bn9kW_6b.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ur={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
