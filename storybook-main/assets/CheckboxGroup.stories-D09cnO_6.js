import{j as e,r as f}from"./iframe-DN0fTWGV.js";import{b as p,u,F as h,t as k}from"./Form-Cd1EVhgg.js";import{L as i}from"./Label-C802sjtx.js";import{R as j,S as v}from"./ResetButton-D9YSKTTf.js";import{B as x}from"./Button-uApu6GnY.js";import{S as C,s as d}from"./Section-Bae4yUtt.js";import{A as O}from"./ActionGroup-D2BuDihe.js";import{w as n,s as r,v as b,g as F}from"./TimeField-DXpzyGzy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bg-k1EYj.js";import"./PropsContextProvider-B4BWOGik.js";import"./mergeRefs-aFji3K89.js";import"./index-C-NDeTtD.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-yteDxoWO.js";import"./context-_fNSffOv.js";import"./browser-BG2zS4gf.js";import"./utils-KHZtdcQs.js";import"./ProgressBar-CMyS42Dg.js";import"./Hidden-CpMgfJZp.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cuf61xud.js";import"./Text-CLTzTYkM.js";import"./EmulatedBoldText-CdlTcGoA.js";import"./LoadingSpinner-CRqVu2d-.js";import"./Button-BqbeFKAl.js";import"./useFocusRing-Bi-c5lNH.js";import"./useFocusable-DvSUTL0j.js";import"./context-DUBN3HgP.js";import"./RSPContexts-CXdzH5Rq.js";import"./Collection-DPICVRVL.js";import"./CollectionBuilder-7GVzVquf.js";import"./SelectionIndicator-ChEaB0zR.js";import"./Separator-CbRW2pX1.js";import"./useStatic-DA5kar0v.js";import"./Accordion-D7yLcWFC.js";import"./Alert-Cpd-iuOs.js";import"./AlertIcon-D_t13U1R.js";import"./AlertBadge-Hr_oCvhM.js";import"./Align-DuJPe5gd.js";import"./Popover-oDqr7Nfr.js";import"./OverlayTrigger-BxicfPZ1.js";import"./TableFooterRow-RSgQDu1E.js";import"./SkeletonText-Fk8yZXsj.js";import"./Avatar-CjhgWUJl.js";import"./AvatarStack-DiMUC231.js";import"./Badge-B4N4pUOv.js";import"./BigNumber-Yl5a57NA.js";import"./Breadcrumb-YEGx-rGQ.js";import"./Link-DbZd-iVz.js";import"./Heading-DYEbRjlj.js";import"./Legend-DiZllTBb.js";import"./FileCardList-CA73fY06.js";import"./Image-ncn48exK.js";import"./Color-Chwd73Rj.js";import"./Content-Dl1qh6D4.js";import"./ContextualHelpTrigger-CRucrJit.js";import"./CounterBadge-D53nik_y.js";import"./DonutChart-BUm4qe-w.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-9SL9RU8e.js";import"./Header-DvHWDufz.js";import"./Initials-BnQ1LCtT.js";import"./InlineCode-ByOVybOd.js";import"./PopoverTrigger-DKN0Zj2F.js";import"./Separator-2AMI3M16.js";import"./Message-CpojsH-c.js";import"./MessageSeparator-B3ufFzYX.js";import"./NavigationGroup-CQIW4w3C.js";import"./Notification-Bk6cogWg.js";import"./NotificationProvider-Bs-kRf48.js";import"./ProgressBar-iA_T9LR7.js";import"./Rating-DCK456Gd.js";import"./Skeleton-g2Cf08Rc.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ne={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=k();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(C,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Ue=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,Ue as __namedExportsOrder,Ne as default};
