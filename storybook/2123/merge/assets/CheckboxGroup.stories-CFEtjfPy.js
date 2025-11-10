import{j as r,r as j}from"./iframe-Bb2Dt4gO.js";import{a as u,u as h,F as d,t as v}from"./Form-VPpCnAvp.js";import{L as i}from"./Label-CRmoZTP3.js";import{B as c}from"./Button-4ByktXkK.js";import{S as f}from"./Section-C0-TyT9T.js";import{A as O}from"./ActionGroup-CCvmBmqO.js";import{s as x}from"./Action-Bp0Zr2aj.js";import{q as n,n as e,p as b,F as k}from"./Modal-CtJ_XvWe.js";import"./index-nuYtCEEu.js";import"./dynamic-BQ6J2UuW.js";import"./flowComponent-CJrXYk4c.js";import"./index-DhaS9Xnk.js";import"./clsx-B-dksMZM.js";import"./index-P4MnPsl7.js";import"./useLocalizedStringFormatter-C4xJr-3b.js";import"./context-OBblbX9f.js";import"./browser-C45ETDbe.js";import"./utils-BRWgyZeC.js";import"./ProgressBar-DmgKKf3-.js";import"./Hidden-DZjS-0Re.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-ncqjKY0i.js";import"./Text-DlHja6rG.js";import"./EmulatedBoldText-BkxAkbDy.js";import"./LoadingSpinner-BExDoLYl.js";import"./Button-BSQSoIIB.js";import"./useFocusRing-BqqueoK_.js";import"./useFocusable-BsZWsXG_.js";import"./Dialog-D5KTniQT.js";import"./RSPContexts-ScA0jBqq.js";import"./OverlayArrow-BPrkRyf_.js";import"./useControlledState-C9bMDpWq.js";import"./Collection-By7hYb7j.js";import"./CollectionBuilder-DXrUA6kr.js";import"./SelectionIndicator-BSio2Upk.js";import"./Separator-BddUv5iq.js";import"./getActionGroupSlot-BbHFGHkf.js";import"./useStatic-CQaBBZXk.js";import"./context-CWQK-DX0.js";import"./Popover-BQgLuDpm.js";import"./OverlayTrigger-DjQFyneA.js";import"./ControlledNotification-Dc8xOVnV.js";import"./ClearPropsContextView-DaYr1H4N.js";import"./LayoutCard-YpKgl9nW.js";import"./Accordion-DGRGx11P.js";import"./Alert-lk5o4gl5.js";import"./AlertIcon-Bt1YKJtK.js";import"./AlertBadge-0TcDWWAj.js";import"./Align-BCjIvsLP.js";import"./TableFooterRow-Cbthxk4w.js";import"./SkeletonText-Cu752mTj.js";import"./Avatar-C3Pb-bTu.js";import"./AvatarStack-CzIj3jq7.js";import"./Badge-CKxOkMi-.js";import"./BigNumber-CbvwNa_H.js";import"./Breadcrumb-sO98Vpck.js";import"./Link-BMpobd2R.js";import"./Heading-BwEM0wnm.js";import"./Legend-BSAi3nGx.js";import"./FileCardList-D7QvfjQz.js";import"./Image-Du2AcdXx.js";import"./CodeBlock-si55p5GP.js";import"./CopyButton-DiEjPM6D.js";import"./Tooltip-CLG6wUnX.js";import"./react-children-utilities-DPQFdZhD.js";import"./Color-Bcm0LNQD.js";import"./Content-DXm5Datb.js";import"./ContextualHelpTrigger-DNvagXsg.js";import"./CounterBadge-CXgCPI6G.js";import"./DonutChart-DdDwnRyM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-vyKWjEfX.js";import"./Header-DVUcGivO.js";import"./Initials-D6pqesK3.js";import"./InlineCode-DgXweDmU.js";import"./LabeledValue-xSOLSfkt.js";import"./PopoverTrigger-DciJ0UKG.js";import"./Markdown-6iD_6jvt.js";import"./Separator-B2FG63lw.js";import"./Message-DA98by-r.js";import"./MessageSeparator-DV8GTfI7.js";import"./NavigationGroup-alVrwbA3.js";import"./Notification-BAcfQvI5.js";import"./NotificationProvider-s0oUmaCg.js";import"./ProgressBar-DfD_5qPB.js";import"./Rating-4sEVsItD.js";import"./Skeleton-Wo5MA_Nc.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{a as Default,l as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
