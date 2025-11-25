import{j as r,r as x}from"./iframe-CgbY7LhW.js";import{c as p,u as c,F as a,t as F}from"./Form-D4_WTUDh.js";import{R as l,S as h}from"./ResetButton-5UoZwfTp.js";import{B as d}from"./Button-SVEMHQlh.js";import{S as j,s as u}from"./Section-vgTzgtmS.js";import{A as b}from"./ActionGroup-CmB_jI0r.js";import{v as t,F as E}from"./Modal-BfYIexr4.js";import"./index-nuYtCEEu.js";import"./dynamic-BL-wVa7i.js";import"./flowComponent-CIzRpviz.js";import"./index-DzXy7NVI.js";import"./clsx-B-dksMZM.js";import"./index-BGPntLpu.js";import"./useLocalizedStringFormatter-n70-9iPv.js";import"./context-CFrKoiSq.js";import"./browser-B9s1Wzc0.js";import"./utils-CrtKH5yx.js";import"./IconWarning-B_M4h9wv.js";import"./Text-DYTEpYR_.js";import"./EmulatedBoldText-B0grik2o.js";import"./LoadingSpinner-D5GUeRWw.js";import"./Button-B3Gd0dhU.js";import"./ProgressBar-DkKo9kM8.js";import"./Hidden-C39TrB4S.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BLRAUViD.js";import"./useFocusable-CK20RdZz.js";import"./context-BZ4nmd66.js";import"./RSPContexts-a1gWmxyS.js";import"./Collection-AJHavNni.js";import"./CollectionBuilder-vSLB7roW.js";import"./SelectionIndicator-DAnIk2iR.js";import"./Separator-Dbfv1-4R.js";import"./useStatic-DAnqOhq-.js";import"./FileCardList-C6bH-qYK.js";import"./Avatar-WA_Rs_vA.js";import"./AlertIcon-DNdzJj2o.js";import"./Image-DDNMfo4c.js";import"./Link-CnlhKMXm.js";import"./ControlledNotification-DRgvriDq.js";import"./Flex-CENJLpDN.js";import"./Accordion-z-ohBE1U.js";import"./Alert-B_kIhVrI.js";import"./AlertBadge-DNjrKNd8.js";import"./Align-CtVPE4QN.js";import"./AvatarStack-BlJN3mG4.js";import"./BigNumber-CoK4x3f1.js";import"./Breadcrumb-CzsKgwxv.js";import"./Heading-B5jO-5Wf.js";import"./Legend-ChYFXknj.js";import"./Color-DuOfyeUm.js";import"./TableFooterRow-DAgU7sHY.js";import"./SkeletonText-CnZTtgwR.js";import"./Content-CEEnoGhP.js";import"./Label-VGhN0jRZ.js";import"./CounterBadge-BedfIzch.js";import"./DonutChart-BPWlwlOc.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8u-hiHg.js";import"./Header-CShmbRTO.js";import"./Initials-YnzuiPfJ.js";import"./InlineCode-CW1svUV-.js";import"./LayoutCard-vyJIg7vB.js";import"./Separator-DWsNhIeQ.js";import"./MessageSeparator-DR2YivYW.js";import"./NavigationGroup-DcTqlZP5.js";import"./Notification-SBEJzfTe.js";import"./NotificationProvider-DzYeqYbn.js";import"./ProgressBar-BVXsq-Dv.js";import"./Rating-DW5q1Ced.js";import"./Skeleton-DRKewfj9.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),B(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},i={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
