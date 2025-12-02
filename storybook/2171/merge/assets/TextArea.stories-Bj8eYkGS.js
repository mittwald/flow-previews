import{j as r,r as F}from"./iframe-CkaLytcH.js";import{b as p,u as d,F as l,t as j}from"./Form-DT0yO1QW.js";import{L as o}from"./Label-C12WmE73.js";import{R as h,S as x}from"./ResetButton-DN2nIo5J.js";import{B as c}from"./Button-CNnlz4DJ.js";import{S as g,s as u}from"./Section-D3xKxzs1.js";import{A as b}from"./ActionGroup-CAlgHOw9.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{a as t,g as S}from"./TimeField-CD_1Cvsc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CuWqRT77.js";import"./PropsContextProvider-B_PBnLNZ.js";import"./mergeRefs-CCvS6fDC.js";import"./index-CUykgx4T.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BLs_py7w.js";import"./context-BgsgCuSf.js";import"./browser-BGuPTbio.js";import"./utils-Cx1NHB3m.js";import"./ProgressBar-DEywvAoj.js";import"./Hidden-DtaNkSKc.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-at2C7kXG.js";import"./Text-tzLzAj2U.js";import"./EmulatedBoldText-ChGTtZfs.js";import"./LoadingSpinner-B6kRnXp7.js";import"./Button-6wBbL84E.js";import"./useFocusRing-BYIv-g0Z.js";import"./useFocusable-DNVgDv7W.js";import"./context-C49kt-dL.js";import"./RSPContexts-DGlCkRo9.js";import"./Collection-G136PDCR.js";import"./CollectionBuilder-D5yy7zsb.js";import"./SelectionIndicator-C6-uo9TF.js";import"./Separator-BUQgzvoO.js";import"./useStatic-CwKwrY2l.js";import"./Accordion-O8KQNDhm.js";import"./Alert-Cn90v1OP.js";import"./AlertIcon-C1KERsp1.js";import"./AlertBadge-EOMQWw9S.js";import"./Align-B8YLISN9.js";import"./Popover-O-ijI_rS.js";import"./OverlayTrigger-BAlGpEF-.js";import"./TableFooterRow-DTIDyRXC.js";import"./SkeletonText-BvetQVDs.js";import"./Avatar-D0TiQ1yF.js";import"./AvatarStack-D2_NoW2F.js";import"./Badge-BPLvzjro.js";import"./BigNumber-PI7ivuk4.js";import"./Breadcrumb-Cz8sITnV.js";import"./Link-Ch1hHAdK.js";import"./Heading-CDNPJ0iR.js";import"./Legend-D7Hlt0lN.js";import"./FileCardList-DbMTg1eZ.js";import"./Image-B4WOffmQ.js";import"./Color-Bv30AifR.js";import"./Content-CDQlrVSe.js";import"./ContextualHelpTrigger-O6xxa11A.js";import"./CounterBadge-BkFZCkUW.js";import"./DonutChart-CyfbjEIy.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DcaWbFCQ.js";import"./Header-CYrnS-JX.js";import"./Initials-o8TldnRX.js";import"./InlineCode-BSZBkh4R.js";import"./PopoverTrigger-DdiRrf85.js";import"./Separator-Bbi4YrrB.js";import"./Message-DaqEjKEm.js";import"./MessageSeparator-B31U0QQH.js";import"./NavigationGroup-CORL8hsO.js";import"./Notification-BilvgaaS.js";import"./NotificationProvider-CEjHGY9X.js";import"./ProgressBar-J82fOLhc.js";import"./Rating-JgrMmlzu.js";import"./Skeleton-DIhE6pV7.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Ur={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
