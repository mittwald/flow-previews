import{j as e,r as g}from"./iframe-Dxj0SZQz.js";import{c as d,u as c,F as l,t as D}from"./Form-DjbKdWk-.js";import{L as t}from"./Label-r7-X59g3.js";import{R as h,S as F}from"./ResetButton-BsID6BFc.js";import{B as p}from"./Button-BkQ_NRiX.js";import{S,s as u}from"./Section-CFUbkEZF.js";import{A as b}from"./ActionGroup-WjAvs-BH.js";import{H as f,J as o,$ as R,I as E,x as m,F as B}from"./Modal-CL3ryr0m.js";import"./index-nuYtCEEu.js";import"./dynamic-BgiT-tjm.js";import"./flowComponent-D6iV2DzL.js";import"./index-Bd2Xf5pv.js";import"./clsx-B-dksMZM.js";import"./index-BWjFPLHz.js";import"./useLocalizedStringFormatter-eZsG_k2F.js";import"./context-C6-P6koC.js";import"./browser-KBC6jiXy.js";import"./utils-Cfq8faXc.js";import"./ProgressBar-LRI5m-um.js";import"./Hidden-Bwn6RBKf.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-S0UXp0fg.js";import"./Text-nz3YKbDr.js";import"./EmulatedBoldText-CgLGHcPw.js";import"./LoadingSpinner-D4zskspE.js";import"./Button-CXPXZjsM.js";import"./useFocusRing-DoLOI9UU.js";import"./useFocusable-DJxE8QS3.js";import"./context-DANfXhqK.js";import"./RSPContexts-jyJS88rd.js";import"./Collection-A8jgBcw1.js";import"./CollectionBuilder-DAFFcbNw.js";import"./SelectionIndicator-DpzNLy52.js";import"./Separator-CHuWT96t.js";import"./useStatic-CdzpEGHk.js";import"./getActionGroupSlot-Di5FkjTO.js";import"./FileCardList-B5oao-64.js";import"./Avatar-B1NU17Uz.js";import"./AlertIcon-EqhFZIQA.js";import"./Image-B3ODdtrF.js";import"./Link-CcIfSoxL.js";import"./ControlledNotification-BWZxS6H1.js";import"./LayoutCard-DAKag2G9.js";import"./Accordion-B1R47Hbp.js";import"./Alert-CfoEhuU6.js";import"./AlertBadge-kPhBxQgx.js";import"./Align-hyosXLBb.js";import"./AvatarStack-DUps09Fx.js";import"./BigNumber-BGAos7Ap.js";import"./Breadcrumb-Bzo_Amw-.js";import"./Heading-DOS_NISo.js";import"./Legend-BNkBSiUS.js";import"./Color-BdzDTaI9.js";import"./TableFooterRow-BLcT84fb.js";import"./SkeletonText-Co3L-D1u.js";import"./Content-BKdb7Kra.js";import"./CounterBadge-D-Xb7Rtk.js";import"./DonutChart-DY9mPS7U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bf_xICCO.js";import"./Header-C6iAqINA.js";import"./Initials-DyQkgoJm.js";import"./InlineCode-FKDFRHZK.js";import"./Separator-Du6kbLAk.js";import"./MessageSeparator-BKDDL8-8.js";import"./NavigationGroup-D_-Rv13i.js";import"./Notification-Chd6t4iX.js";import"./NotificationProvider-BaN4hfIP.js";import"./ProgressBar-CD9e9P4f.js";import"./Rating-CmxrZzsX.js";import"./Skeleton-CcbZpjVZ.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <DateRangePicker isInvalid>
          <Label>Future Date</Label>
          <FieldDescription>Select a future date</FieldDescription>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DateRangePicker>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
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
}`,...a.parameters?.docs?.source}}};const Ke=["Default","WithFieldError","WithFocus"];export{n as Default,s as WithFieldError,a as WithFocus,Ke as __namedExportsOrder,Je as default};
