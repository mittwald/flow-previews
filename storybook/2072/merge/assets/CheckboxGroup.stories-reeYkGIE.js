import{j as r}from"./iframe-CqjcYzEy.js";import{a as b,u as f,F as v,t as k}from"./Form-B9tr9_nz.js";import{L as i}from"./Label-To7Hive9.js";import{B as l}from"./Button-_n3f2tJI.js";import{S as O}from"./Section-JW2VQrnX.js";import{A as B}from"./ActionGroup-D6A6si9S.js";import{s as C}from"./Action-BV8ECr9I.js";import{C as s}from"./CheckboxGroup-DsT6fmVU.js";import{C as e}from"./Checkbox-DcMoh04r.js";import{F as c}from"./FieldDescription-DOrquxD2.js";import"./index-Cun1SEai.js";import"./dynamic-B6VmRDv6.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./clsx-B-dksMZM.js";import"./index-0TrhkGFb.js";import"./FieldError-BSbVK43F.js";import"./IconWarning-D54OF1fr.js";import"./FieldError-CvNEPKy0.js";import"./utils-CEH4bJOc.js";import"./Text-DBGfsT13.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./context-CVWMzqu0.js";import"./browser-BlhuXvad.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./Text-C88kvj5Y.js";import"./EmulatedBoldText-CpIdef6b.js";import"./LoadingSpinner-BJn8yItu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BkLoBLwO.js";import"./ProgressBar-CdOohM5f.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C-6OBS1L.js";import"./useFocus-BSqxszdS.js";import"./useFocusRing-Cq8bWJ4k.js";import"./useFocusable-Cui5lI-x.js";import"./ContextMenuSection-CogvxgrL.js";import"./Dialog-S-MpwxP2.js";import"./RSPContexts-CWbXVAY-.js";import"./OverlayArrow-wycJn0we.js";import"./useControlledState-D11yMwJT.js";import"./Collection-BS6hKJ97.js";import"./CollectionBuilder-Ke-tvOIi.js";import"./context-os1nJ67Y.js";import"./Separator-CumANQwW.js";import"./SelectionManager-7ttSlvgr.js";import"./useEvent-CkTqiin2.js";import"./useCollator-qMQcDonM.js";import"./FocusScope-BTKvvs_H.js";import"./VisuallyHidden-l-GsqitC.js";import"./getActionGroupSlot-DrC7gLzC.js";import"./useStatic-B0fjiaVy.js";import"./context-BZQvEHSq.js";import"./ColumnLayout-NaL3c8uY.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-Bo04lqU0.js";import"./Form-DnnLWbpp.js";import"./useFormValidation-Jq_wsvSc.js";import"./useToggleState-CKfljIsx.js";import"./useFormReset-BSVvJl_b.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Lr={title:"Integrations/React Hook Form/CheckboxGroup",component:b,render:()=>{const o=async t=>{await C(1500),g(t)},F=f({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),n=k();return r.jsx(v,{form:F,onSubmit:o,children:r.jsxs(O,{children:[r.jsx(n,{name:"interests",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsDefaultValue",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check at least 1 item"})]})}),r.jsx(n,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check max 2 items"})]})}),r.jsx(B,{children:r.jsx(l,{type:"submit",children:"Submit"})})]})})}},m={},a={render:()=>{const o=f();return r.jsxs(v,{form:o,onSubmit:async()=>await C(2e3),children:[r.jsx(b,{name:"text",rules:{required:!0},children:r.jsxs(s,{l:[1,1,1],m:[1,1],children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(l,{type:"submit",children:"Submit"})]})}};var p,u,h;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(u=m.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var d,x,j;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
