import{j as r,r as F}from"./iframe-B9DmQEvm.js";import{b as p,u as d,F as l,t as j}from"./Form-BXf4vgVp.js";import{L as o}from"./Label-CdjTRCcN.js";import{R as h,S as x}from"./ResetButton-BQp3TiJa.js";import{B as c}from"./Button-Dm4Gj0Ue.js";import{S as g,s as u}from"./Section-C_OhuZda.js";import{A as b}from"./ActionGroup-BPBZMd0G.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-BCrDwFv1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D9zzs7eg.js";import"./PropsContextProvider-D4WQNPB7.js";import"./mergeRefs-D6R5gGm4.js";import"./index-CFtXvdW-.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BIKdkDCX.js";import"./context-f4__Yrtg.js";import"./browser-B5MMVHjZ.js";import"./utils-Oe4-zNeB.js";import"./ProgressBar-2zujtr-f.js";import"./Hidden-CljRM6Hn.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DHbLseiS.js";import"./remote-pOc8vwOE.js";import"./Text-DWnECR1V.js";import"./EmulatedBoldText-CcFQw1kW.js";import"./LoadingSpinner-CoK93z8B.js";import"./Button-aNJWqsMX.js";import"./useFocusRing-CcbQunlU.js";import"./useFocusable-CWuYRGi_.js";import"./context-CWF20r0U.js";import"./RSPContexts-CotCKDbU.js";import"./Collection-hhJxclBU.js";import"./CollectionBuilder-BT6nUxaY.js";import"./SelectionIndicator-DK0swjPr.js";import"./Separator-CBfW85A4.js";import"./useStatic-D5S9NXQn.js";import"./Accordion-D4jAtFpD.js";import"./Alert-C2lbq4BB.js";import"./AlertIcon-DNW_OXFb.js";import"./AlertBadge-C6Me14oL.js";import"./Align-DPuLyLOo.js";import"./Popover-UpR8ui09.js";import"./OverlayTrigger-BPc83cwF.js";import"./TableFooterRow-B35Rsrml.js";import"./SkeletonText-ZPaTyog7.js";import"./Avatar-Bx2ST7JM.js";import"./AvatarStack-_PkufGBz.js";import"./Badge-DmsrCf-1.js";import"./BigNumber-DHP9TJHn.js";import"./Breadcrumb-LOJeBKLO.js";import"./Link-DZQzqDqQ.js";import"./Heading-DwjnBE1G.js";import"./Legend-Bh3IkHhT.js";import"./FileCardList-BAmcrG49.js";import"./Image-BrfuIr9u.js";import"./Color-DhQB_epS.js";import"./Content-JADEg-IW.js";import"./ContextualHelpTrigger-dKYi-1DA.js";import"./CounterBadge-Cls8KRo_.js";import"./DonutChart-B9esqjeH.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DEET8u9H.js";import"./Header-DeL33C6q.js";import"./Initials-Dn2eAsB4.js";import"./InlineCode-C2pHeQEX.js";import"./PopoverTrigger-BccW7zFf.js";import"./Separator-fewq4lm1.js";import"./Message-CS9r66Cj.js";import"./MessageSeparator-B3ZhQOA7.js";import"./NavigationGroup-bOs2Paa-.js";import"./Notification-D4DyPezB.js";import"./NotificationProvider-HN69aTqY.js";import"./ProgressBar-CZYj1IvA.js";import"./Rating-BgHH720o.js";import"./Skeleton-xhKc-iSZ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Yr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
