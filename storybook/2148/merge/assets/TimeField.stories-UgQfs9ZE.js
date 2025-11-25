import{j as r,r as f}from"./iframe-C2UJ9G9V.js";import{c as a,u as p,F as c,t as j}from"./Form-BD_PnNUm.js";import{L as t}from"./Label-BBN4mcuG.js";import{R as u,S as F}from"./ResetButton-3y2610P3.js";import{B as l}from"./Button-yv3wqtk5.js";import{S as b,s as d}from"./Section-CBuaZusl.js";import{A as E}from"./ActionGroup-CNhMYjm6.js";import{aw as S,av as o,F as T}from"./Modal-C3GlUU69.js";import"./index-nuYtCEEu.js";import"./dynamic-CtYtQruH.js";import"./flowComponent-BtVUgkFH.js";import"./index-CG7Nx2SL.js";import"./clsx-B-dksMZM.js";import"./index-CuKGAAd3.js";import"./useLocalizedStringFormatter-Cj5LaI8a.js";import"./context-2O4QHQV-.js";import"./browser-CXIjdJ2N.js";import"./utils-ZVY4AxNZ.js";import"./ProgressBar-ClZTUzWw.js";import"./Hidden-3aP1klpL.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DZ2M7osE.js";import"./Text-BmY25DFr.js";import"./EmulatedBoldText-T6xRvrrg.js";import"./LoadingSpinner-bmxeb1W_.js";import"./Button-ubiq7Xl0.js";import"./useFocusRing-Di5E6gYC.js";import"./useFocusable-xso9xERq.js";import"./context-BIEfUQ2p.js";import"./RSPContexts-Hx65IcT5.js";import"./Collection-Bq2Hdn5d.js";import"./CollectionBuilder-CT2X_xMF.js";import"./SelectionIndicator-NBUBArhq.js";import"./Separator-BRqnt4hv.js";import"./useStatic-CnL7CFtT.js";import"./FileCardList-Bg7rGpmm.js";import"./Avatar-CotRFKhH.js";import"./AlertIcon-BbdcFEUV.js";import"./Image-tSUEQh2P.js";import"./Link-Ly3EXSZu.js";import"./ControlledNotification-Dern2fya.js";import"./Flex-BEFrt-IQ.js";import"./Accordion-QhUZXNHp.js";import"./Alert-Ds8X36u1.js";import"./AlertBadge-ZeNZ0VBj.js";import"./Align-D_gCoYIj.js";import"./AvatarStack-CbwTqXtu.js";import"./BigNumber-Cd2Z6V7G.js";import"./Breadcrumb-DAcj-pff.js";import"./Heading-97bPXynU.js";import"./Legend-D3nPJFkg.js";import"./Color-vKPfJuGH.js";import"./TableFooterRow-BuUJOBvV.js";import"./SkeletonText-DO08ACrp.js";import"./Content-DSkO-Fju.js";import"./CounterBadge-D7aLAN66.js";import"./DonutChart-BN1DSipU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-0iALzZOv.js";import"./Header-z3h4vRWi.js";import"./Initials-CJIq7z5p.js";import"./InlineCode-74OZ_Ktz.js";import"./LayoutCard-8TwEToQW.js";import"./Separator-3tE_TyTR.js";import"./MessageSeparator-UlRvzTWs.js";import"./NavigationGroup-gQIxKXiZ.js";import"./Notification-CJ42Iq6R.js";import"./NotificationProvider-C9_-azBV.js";import"./ProgressBar-DJi-krNr.js";import"./Rating-BgPI6MEV.js";import"./Skeleton-qOcpVc7f.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await d(1500),g(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(c,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Hr as __namedExportsOrder,Gr as default};
