import{j as r,r as C}from"./iframe-CgbY7LhW.js";import{c as p,u as a,F as c,t as j}from"./Form-D4_WTUDh.js";import{R as h,S as x}from"./ResetButton-5UoZwfTp.js";import{B as l}from"./Button-SVEMHQlh.js";import{S as B,s as u}from"./Section-vgTzgtmS.js";import{A as b}from"./ActionGroup-CmB_jI0r.js";import{T as i}from"./Text-DYTEpYR_.js";import{w as m,F as E}from"./Modal-BfYIexr4.js";import{C as d}from"./Content-CEEnoGhP.js";import"./index-nuYtCEEu.js";import"./dynamic-BL-wVa7i.js";import"./flowComponent-CIzRpviz.js";import"./index-DzXy7NVI.js";import"./clsx-B-dksMZM.js";import"./index-BGPntLpu.js";import"./useLocalizedStringFormatter-n70-9iPv.js";import"./context-CFrKoiSq.js";import"./browser-B9s1Wzc0.js";import"./utils-CrtKH5yx.js";import"./IconWarning-B_M4h9wv.js";import"./LoadingSpinner-D5GUeRWw.js";import"./Button-B3Gd0dhU.js";import"./ProgressBar-DkKo9kM8.js";import"./Hidden-C39TrB4S.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BLRAUViD.js";import"./useFocusable-CK20RdZz.js";import"./context-BZ4nmd66.js";import"./RSPContexts-a1gWmxyS.js";import"./Collection-AJHavNni.js";import"./CollectionBuilder-vSLB7roW.js";import"./SelectionIndicator-DAnIk2iR.js";import"./Separator-Dbfv1-4R.js";import"./useStatic-DAnqOhq-.js";import"./EmulatedBoldText-B0grik2o.js";import"./FileCardList-C6bH-qYK.js";import"./Avatar-WA_Rs_vA.js";import"./AlertIcon-DNdzJj2o.js";import"./Image-DDNMfo4c.js";import"./Link-CnlhKMXm.js";import"./ControlledNotification-DRgvriDq.js";import"./Flex-CENJLpDN.js";import"./Accordion-z-ohBE1U.js";import"./Alert-B_kIhVrI.js";import"./AlertBadge-DNjrKNd8.js";import"./Align-CtVPE4QN.js";import"./AvatarStack-BlJN3mG4.js";import"./BigNumber-CoK4x3f1.js";import"./Breadcrumb-CzsKgwxv.js";import"./Heading-B5jO-5Wf.js";import"./Legend-ChYFXknj.js";import"./Color-DuOfyeUm.js";import"./TableFooterRow-DAgU7sHY.js";import"./SkeletonText-CnZTtgwR.js";import"./Label-VGhN0jRZ.js";import"./CounterBadge-BedfIzch.js";import"./DonutChart-BPWlwlOc.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8u-hiHg.js";import"./Header-CShmbRTO.js";import"./Initials-YnzuiPfJ.js";import"./InlineCode-CW1svUV-.js";import"./LayoutCard-vyJIg7vB.js";import"./Separator-DWsNhIeQ.js";import"./MessageSeparator-DR2YivYW.js";import"./NavigationGroup-DcTqlZP5.js";import"./Notification-SBEJzfTe.js";import"./NotificationProvider-DzYeqYbn.js";import"./ProgressBar-BVXsq-Dv.js";import"./Rating-DW5q1Ced.js";import"./Skeleton-DRKewfj9.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Lr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};
