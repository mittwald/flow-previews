import{j as r,r as x}from"./iframe-C3akzpV1.js";import{b as p,u as c,F as a,t as F}from"./Form-BBUfMwJH.js";import{R as l,S as h}from"./ResetButton-DcYUQMlr.js";import{B as d}from"./Button-C_UT-1QU.js";import{S as j,s as u}from"./Section-5SrLYku3.js";import{A as b}from"./ActionGroup-BTjiPvx2.js";import{s as t,g as E}from"./TimeField-DAn-563Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-O2zPY50D.js";import"./PropsContextProvider-DqwY9XEq.js";import"./mergeRefs-BXY85axa.js";import"./index-BSfx5kph.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BXg2U2e2.js";import"./context-BgN9eCaX.js";import"./browser-mTtOjkkJ.js";import"./utils-FFzu0Pw2.js";import"./IconWarning-C4SgI6OV.js";import"./Text-ItbFkn--.js";import"./EmulatedBoldText-B3LO_M0J.js";import"./LoadingSpinner-DNlomGtB.js";import"./Button-D5o5rXyo.js";import"./ProgressBar-72_GXUSH.js";import"./Hidden-Bcrhq7St.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DQs4OSUU.js";import"./useFocusable-CC2L6-Hl.js";import"./context-CfnX_riS.js";import"./RSPContexts-DVc_zOA3.js";import"./Collection-DTGfPiJx.js";import"./CollectionBuilder-BExMR5Fd.js";import"./SelectionIndicator-B2cJMogF.js";import"./Separator-C1Ah5vxC.js";import"./useStatic-DFnfS72f.js";import"./Accordion-CnycAhcp.js";import"./Alert-DSPCig_4.js";import"./AlertIcon-KuJe6yIM.js";import"./AlertBadge-DKJSIQMi.js";import"./Align-CXBZBCXD.js";import"./Popover-Ds9ANfz7.js";import"./OverlayTrigger-BeAJLsRg.js";import"./TableFooterRow-DBL3SUB0.js";import"./SkeletonText-CSIMGEyC.js";import"./Avatar-CfRfmXe3.js";import"./AvatarStack-DoZxY-NC.js";import"./Badge-A9sRZW6O.js";import"./BigNumber-DDJD3MBR.js";import"./Breadcrumb-Cdr0vGx4.js";import"./Link-Yn6v2d1m.js";import"./Heading-Dx6berQj.js";import"./Legend-D_mPT_Dz.js";import"./FileCardList-DVpuYyK9.js";import"./Image-dY_1AQAY.js";import"./Color-C0tW3a4A.js";import"./Content-D_Dg4gNK.js";import"./Label-DuiJLVmM.js";import"./ContextualHelpTrigger-B4NbXTkX.js";import"./CounterBadge-2MxVkVfw.js";import"./DonutChart-DDZkVGZJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DQeVhZkV.js";import"./Header-P2jmXQ5Q.js";import"./Initials-CcNlP_Ax.js";import"./InlineCode-kLchHmKQ.js";import"./PopoverTrigger-DBjbYvg8.js";import"./Separator-B02tK38r.js";import"./Message-DJdW1Dm_.js";import"./MessageSeparator-Ckz-pkPt.js";import"./NavigationGroup-G3mKXWuk.js";import"./Notification-Bn7dQSYD.js";import"./NotificationProvider-RbXQAcKo.js";import"./ProgressBar-BfOMQEaa.js";import"./Rating-DL9Taqdj.js";import"./Skeleton-sg2lGCG1.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Lr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};
