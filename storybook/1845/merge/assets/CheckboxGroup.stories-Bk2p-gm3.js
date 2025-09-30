import{j as r}from"./iframe-B7R3Cp0m.js";import{a as b,u as f,F as v,t as k}from"./Form-Ca-ydWJ8.js";import{L as i}from"./Label-BwiLuc4D.js";import{B as l}from"./Button-BfLhmrhP.js";import{S as O}from"./Section-CXYImEJk.js";import{A as B}from"./ActionGroup-DwKGVJQl.js";import{s as C}from"./Action-Duus-uy7.js";import{C as s}from"./CheckboxGroup-BOaHA_rv.js";import{C as e}from"./Checkbox-Bojawak6.js";import{F as c}from"./FieldDescription-C2J1CzuI.js";import"./index-Cun1SEai.js";import"./dynamic-DQGoa_Us.js";import"./flowComponent-W1sLmgeU.js";import"./index-DeoRyUxP.js";import"./clsx-B-dksMZM.js";import"./index-DEEeTq16.js";import"./FieldError-C50u32vO.js";import"./IconWarning-CiDVbDUI.js";import"./FieldError-DSYDYeL4.js";import"./utils-Cx-QUl4i.js";import"./Text-Cq8XMVEi.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BoxQ9ugt.js";import"./context-DZWDYeWp.js";import"./browser-D9qXvoab.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CciGw-jp.js";import"./Hidden-Cw4vRCn8.js";import"./Text-mmmtihIj.js";import"./EmulatedBoldText-Bu0mLg2V.js";import"./LoadingSpinner-CBvMx9JI.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DTyr71oU.js";import"./ProgressBar-BUsdfXWy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CZzcdL0j.js";import"./useFocus-BfnX2cH5.js";import"./useFocusRing-KQNrYpLi.js";import"./useFocusable-gE9kDuNJ.js";import"./ContextMenuSection-Qzqr7kFk.js";import"./Dialog-qQprQaf0.js";import"./RSPContexts-nV9TqCtk.js";import"./OverlayArrow-BoyqVqhR.js";import"./useControlledState-DvHwfOTB.js";import"./Collection-DVhSH9ed.js";import"./CollectionBuilder-CIEMJSOs.js";import"./context-DaR2uroz.js";import"./Separator-BVTEwXXm.js";import"./SelectionManager-D3KJzfXx.js";import"./useEvent-2yiTmDJR.js";import"./useCollator-DXIp2FB0.js";import"./FocusScope-DeadHndu.js";import"./VisuallyHidden-7GIVT4u3.js";import"./getActionGroupSlot-kiQExVjr.js";import"./useStatic-B9aD_BAc.js";import"./context-s2Psh2SW.js";import"./ColumnLayout-C5z9VB7m.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-Co-fjfKM.js";import"./Form-zMs38ZCV.js";import"./useFormValidation-Dv3hg-yA.js";import"./useToggleState-CV2L6iDV.js";import"./useFormReset-ltvOIr7i.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Lr={title:"Integrations/React Hook Form/CheckboxGroup",component:b,render:()=>{const o=async t=>{await C(1500),g(t)},F=f({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),n=k();return r.jsx(v,{form:F,onSubmit:o,children:r.jsxs(O,{children:[r.jsx(n,{name:"interests",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsDefaultValue",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check at least 1 item"})]})}),r.jsx(n,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check max 2 items"})]})}),r.jsx(B,{children:r.jsx(l,{type:"submit",children:"Submit"})})]})})}},m={},a={render:()=>{const o=f();return r.jsxs(v,{form:o,onSubmit:async()=>await C(2e3),children:[r.jsx(b,{name:"text",rules:{required:!0},children:r.jsxs(s,{l:[1,1,1],m:[1,1],children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(l,{type:"submit",children:"Submit"})]})}};var p,u,h;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(u=m.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var d,x,j;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]}>
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
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};const Rr=["Default","WithFocusAndError"];export{m as Default,a as WithFocusAndError,Rr as __namedExportsOrder,Lr as default};
