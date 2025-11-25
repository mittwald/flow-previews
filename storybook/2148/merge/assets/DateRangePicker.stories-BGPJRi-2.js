import{j as e,r as g}from"./iframe-C2UJ9G9V.js";import{c as d,u as c,F as l,t as D}from"./Form-BD_PnNUm.js";import{L as t}from"./Label-BBN4mcuG.js";import{R as h,S as F}from"./ResetButton-3y2610P3.js";import{B as p}from"./Button-yv3wqtk5.js";import{S,s as u}from"./Section-CBuaZusl.js";import{A as b}from"./ActionGroup-CNhMYjm6.js";import{H as f,J as o,$ as R,I as E,x as m,F as B}from"./Modal-C3GlUU69.js";import"./index-nuYtCEEu.js";import"./dynamic-CtYtQruH.js";import"./flowComponent-BtVUgkFH.js";import"./index-CG7Nx2SL.js";import"./clsx-B-dksMZM.js";import"./index-CuKGAAd3.js";import"./useLocalizedStringFormatter-Cj5LaI8a.js";import"./context-2O4QHQV-.js";import"./browser-CXIjdJ2N.js";import"./utils-ZVY4AxNZ.js";import"./ProgressBar-ClZTUzWw.js";import"./Hidden-3aP1klpL.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DZ2M7osE.js";import"./Text-BmY25DFr.js";import"./EmulatedBoldText-T6xRvrrg.js";import"./LoadingSpinner-bmxeb1W_.js";import"./Button-ubiq7Xl0.js";import"./useFocusRing-Di5E6gYC.js";import"./useFocusable-xso9xERq.js";import"./context-BIEfUQ2p.js";import"./RSPContexts-Hx65IcT5.js";import"./Collection-Bq2Hdn5d.js";import"./CollectionBuilder-CT2X_xMF.js";import"./SelectionIndicator-NBUBArhq.js";import"./Separator-BRqnt4hv.js";import"./useStatic-CnL7CFtT.js";import"./FileCardList-Bg7rGpmm.js";import"./Avatar-CotRFKhH.js";import"./AlertIcon-BbdcFEUV.js";import"./Image-tSUEQh2P.js";import"./Link-Ly3EXSZu.js";import"./ControlledNotification-Dern2fya.js";import"./Flex-BEFrt-IQ.js";import"./Accordion-QhUZXNHp.js";import"./Alert-Ds8X36u1.js";import"./AlertBadge-ZeNZ0VBj.js";import"./Align-D_gCoYIj.js";import"./AvatarStack-CbwTqXtu.js";import"./BigNumber-Cd2Z6V7G.js";import"./Breadcrumb-DAcj-pff.js";import"./Heading-97bPXynU.js";import"./Legend-D3nPJFkg.js";import"./Color-vKPfJuGH.js";import"./TableFooterRow-BuUJOBvV.js";import"./SkeletonText-DO08ACrp.js";import"./Content-DSkO-Fju.js";import"./CounterBadge-D7aLAN66.js";import"./DonutChart-BN1DSipU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-0iALzZOv.js";import"./Header-z3h4vRWi.js";import"./Initials-CJIq7z5p.js";import"./InlineCode-74OZ_Ktz.js";import"./LayoutCard-8TwEToQW.js";import"./Separator-3tE_TyTR.js";import"./MessageSeparator-UlRvzTWs.js";import"./NavigationGroup-gQIxKXiZ.js";import"./Notification-CJ42Iq6R.js";import"./NotificationProvider-C9_-azBV.js";import"./ProgressBar-DJi-krNr.js";import"./Rating-BgPI6MEV.js";import"./Skeleton-qOcpVc7f.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Je={title:"Integrations/React Hook Form/DateRangePicker",component:d,render:()=>{const r=async j=>{await u(1500),y(j)},x=c({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=D();return e.jsx(l,{form:x,onSubmit:r,children:e.jsxs(S,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:R(E()),children:e.jsx(t,{children:"Future date range"})})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})]})})}},n={},s={render:()=>{const r=c({defaultValues:{field:""}});return g.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const r=c({defaultValues:{field:""}});return e.jsxs(l,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(d,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(m,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(F,{children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
