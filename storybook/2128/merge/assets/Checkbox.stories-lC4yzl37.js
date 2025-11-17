import{j as r,r as x}from"./iframe-Dxj0SZQz.js";import{c as p,u as c,F as a,t as F}from"./Form-DjbKdWk-.js";import{R as l,S as h}from"./ResetButton-BsID6BFc.js";import{B as d}from"./Button-BkQ_NRiX.js";import{S as j,s as u}from"./Section-CFUbkEZF.js";import{A as b}from"./ActionGroup-WjAvs-BH.js";import{v as t,F as E}from"./Modal-CL3ryr0m.js";import"./index-nuYtCEEu.js";import"./dynamic-BgiT-tjm.js";import"./flowComponent-D6iV2DzL.js";import"./index-Bd2Xf5pv.js";import"./clsx-B-dksMZM.js";import"./index-BWjFPLHz.js";import"./useLocalizedStringFormatter-eZsG_k2F.js";import"./context-C6-P6koC.js";import"./browser-KBC6jiXy.js";import"./utils-Cfq8faXc.js";import"./IconWarning-S0UXp0fg.js";import"./Text-nz3YKbDr.js";import"./EmulatedBoldText-CgLGHcPw.js";import"./LoadingSpinner-D4zskspE.js";import"./Button-CXPXZjsM.js";import"./ProgressBar-LRI5m-um.js";import"./Hidden-Bwn6RBKf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DoLOI9UU.js";import"./useFocusable-DJxE8QS3.js";import"./context-DANfXhqK.js";import"./RSPContexts-jyJS88rd.js";import"./Collection-A8jgBcw1.js";import"./CollectionBuilder-DAFFcbNw.js";import"./SelectionIndicator-DpzNLy52.js";import"./Separator-CHuWT96t.js";import"./useStatic-CdzpEGHk.js";import"./getActionGroupSlot-Di5FkjTO.js";import"./FileCardList-B5oao-64.js";import"./Avatar-B1NU17Uz.js";import"./AlertIcon-EqhFZIQA.js";import"./Image-B3ODdtrF.js";import"./Link-CcIfSoxL.js";import"./ControlledNotification-BWZxS6H1.js";import"./LayoutCard-DAKag2G9.js";import"./Accordion-B1R47Hbp.js";import"./Alert-CfoEhuU6.js";import"./AlertBadge-kPhBxQgx.js";import"./Align-hyosXLBb.js";import"./AvatarStack-DUps09Fx.js";import"./BigNumber-BGAos7Ap.js";import"./Breadcrumb-Bzo_Amw-.js";import"./Heading-DOS_NISo.js";import"./Legend-BNkBSiUS.js";import"./Color-BdzDTaI9.js";import"./TableFooterRow-BLcT84fb.js";import"./SkeletonText-Co3L-D1u.js";import"./Content-BKdb7Kra.js";import"./Label-r7-X59g3.js";import"./CounterBadge-D-Xb7Rtk.js";import"./DonutChart-DY9mPS7U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bf_xICCO.js";import"./Header-C6iAqINA.js";import"./Initials-DyQkgoJm.js";import"./InlineCode-FKDFRHZK.js";import"./Separator-Du6kbLAk.js";import"./MessageSeparator-BKDDL8-8.js";import"./NavigationGroup-D_-Rv13i.js";import"./Notification-Chd6t4iX.js";import"./NotificationProvider-BaN4hfIP.js";import"./ProgressBar-CD9e9P4f.js";import"./Rating-CmxrZzsX.js";import"./Skeleton-CcbZpjVZ.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),B(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},i={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
