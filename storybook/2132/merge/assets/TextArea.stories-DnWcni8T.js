import{j as r,r as F}from"./iframe-D4i-5dyB.js";import{c as p,u as d,F as l,t as j}from"./Form-Cc_8wvEi.js";import{L as o}from"./Label-CEhfQve0.js";import{R as h,S as x}from"./ResetButton-D8XhYTLV.js";import{B as u}from"./Button-C5iEQf44.js";import{S as g,s as c}from"./Section-B45bmdbE.js";import{A as b}from"./ActionGroup-DfaF4Ihs.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-CIDukiAs.js";import"./index-nuYtCEEu.js";import"./dynamic-l-Dsj5TR.js";import"./PropsContextProvider-BnDJ-hIk.js";import"./mergeRefs-BSb0Bje6.js";import"./index-BqFsReNE.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Csijhnwe.js";import"./context-C76p02_s.js";import"./browser-Cwp7r97w.js";import"./utils-BWp3lM8P.js";import"./ProgressBar-B4smC8yo.js";import"./Hidden-MqQXQobC.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CMFXnZAS.js";import"./Text-D-HEhYG-.js";import"./EmulatedBoldText-wsap70PU.js";import"./LoadingSpinner-DCo1rAvM.js";import"./Button-BNk2Wifn.js";import"./useFocusRing-BHC6C08N.js";import"./useFocusable-COObapRc.js";import"./context-JCcCR3kh.js";import"./RSPContexts-BOewTbeY.js";import"./Collection-E-HFRfBJ.js";import"./CollectionBuilder-C89H_4E6.js";import"./SelectionIndicator-BSmnnWZO.js";import"./Separator-BscBbSvj.js";import"./useStatic-CrV_XbcB.js";import"./getActionGroupSlot-CzwDHsH8.js";import"./Accordion-Dj0W5Sm2.js";import"./Alert-BxysIfVE.js";import"./AlertIcon-CoWnPqgJ.js";import"./AlertBadge-BCJFFVr-.js";import"./Align-CocHRqnc.js";import"./Popover-DY1u_i9c.js";import"./OverlayTrigger-D7YNoZK9.js";import"./TableFooterRow-BiDC_eis.js";import"./SkeletonText-BbzzKkxz.js";import"./Avatar-DYMDRQ8r.js";import"./AvatarStack-DbQ018zr.js";import"./Badge-DGIykoPb.js";import"./BigNumber-RSRBZBqi.js";import"./Breadcrumb-BFthghoN.js";import"./Link-BEGF2rB2.js";import"./Heading-CqgoaxDG.js";import"./Legend-KRzBJzCP.js";import"./FileCardList-BQXii2c7.js";import"./Image-BTNoRYQ7.js";import"./Color-Bghgw0aE.js";import"./Content-BMj6l0HC.js";import"./ContextualHelpTrigger-BRqpivsA.js";import"./CounterBadge-BbpTGMEL.js";import"./DonutChart-BnHSOvbV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-x47jZjZe.js";import"./Header-1VErbdaO.js";import"./Initials-CFmamtSv.js";import"./InlineCode-DaIVko3u.js";import"./PopoverTrigger-CYaHO_51.js";import"./Separator-D1GKViit.js";import"./Message-DJ9Qzwt8.js";import"./MessageSeparator-W1fEMKQv.js";import"./NavigationGroup-Di6mJdeB.js";import"./Notification-t1-j9nZN.js";import"./NotificationProvider-BqX1J7Mu.js";import"./ProgressBar-Def5jKMV.js";import"./Rating-DvqvLdBT.js";import"./Skeleton-B565HWGQ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Yr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await c(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
