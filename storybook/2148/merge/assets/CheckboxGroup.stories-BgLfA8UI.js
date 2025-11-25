import{j as e,r as f}from"./iframe-C2UJ9G9V.js";import{c as p,u,F as h,t as O}from"./Form-BD_PnNUm.js";import{L as i}from"./Label-BBN4mcuG.js";import{R as j,S as v}from"./ResetButton-3y2610P3.js";import{B as x}from"./Button-yv3wqtk5.js";import{S as k,s as d}from"./Section-CBuaZusl.js";import{A as C}from"./ActionGroup-CNhMYjm6.js";import{y as n,v as r,x as b,F}from"./Modal-C3GlUU69.js";import"./index-nuYtCEEu.js";import"./dynamic-CtYtQruH.js";import"./flowComponent-BtVUgkFH.js";import"./index-CG7Nx2SL.js";import"./clsx-B-dksMZM.js";import"./index-CuKGAAd3.js";import"./useLocalizedStringFormatter-Cj5LaI8a.js";import"./context-2O4QHQV-.js";import"./browser-CXIjdJ2N.js";import"./utils-ZVY4AxNZ.js";import"./ProgressBar-ClZTUzWw.js";import"./Hidden-3aP1klpL.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DZ2M7osE.js";import"./Text-BmY25DFr.js";import"./EmulatedBoldText-T6xRvrrg.js";import"./LoadingSpinner-bmxeb1W_.js";import"./Button-ubiq7Xl0.js";import"./useFocusRing-Di5E6gYC.js";import"./useFocusable-xso9xERq.js";import"./context-BIEfUQ2p.js";import"./RSPContexts-Hx65IcT5.js";import"./Collection-Bq2Hdn5d.js";import"./CollectionBuilder-CT2X_xMF.js";import"./SelectionIndicator-NBUBArhq.js";import"./Separator-BRqnt4hv.js";import"./useStatic-CnL7CFtT.js";import"./FileCardList-Bg7rGpmm.js";import"./Avatar-CotRFKhH.js";import"./AlertIcon-BbdcFEUV.js";import"./Image-tSUEQh2P.js";import"./Link-Ly3EXSZu.js";import"./ControlledNotification-Dern2fya.js";import"./Flex-BEFrt-IQ.js";import"./Accordion-QhUZXNHp.js";import"./Alert-Ds8X36u1.js";import"./AlertBadge-ZeNZ0VBj.js";import"./Align-D_gCoYIj.js";import"./AvatarStack-CbwTqXtu.js";import"./BigNumber-Cd2Z6V7G.js";import"./Breadcrumb-DAcj-pff.js";import"./Heading-97bPXynU.js";import"./Legend-D3nPJFkg.js";import"./Color-vKPfJuGH.js";import"./TableFooterRow-BuUJOBvV.js";import"./SkeletonText-DO08ACrp.js";import"./Content-DSkO-Fju.js";import"./CounterBadge-D7aLAN66.js";import"./DonutChart-BN1DSipU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-0iALzZOv.js";import"./Header-z3h4vRWi.js";import"./Initials-CJIq7z5p.js";import"./InlineCode-74OZ_Ktz.js";import"./LayoutCard-8TwEToQW.js";import"./Separator-3tE_TyTR.js";import"./MessageSeparator-UlRvzTWs.js";import"./NavigationGroup-gQIxKXiZ.js";import"./Notification-CJ42Iq6R.js";import"./NotificationProvider-C9_-azBV.js";import"./ProgressBar-DJi-krNr.js";import"./Rating-BgPI6MEV.js";import"./Skeleton-qOcpVc7f.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Te={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=O();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(C,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} isInvalid {...props}>
          <Label>Options</Label>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          <Checkbox value="4">Option 4</Checkbox>
          <Checkbox value="5">Option 5</Checkbox>
          <Checkbox value="6">Option 6</Checkbox>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxGroup>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
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
}`,...c.parameters?.docs?.source}}};const He=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,He as __namedExportsOrder,Te as default};
