import{j as r}from"./iframe-CTxtjXon.js";import{a as b,u as f,F as v,t as k}from"./Form-B0b-E516.js";import{L as i}from"./Label-DtGgIyZp.js";import{B as l}from"./Button-CTR-HA58.js";import{S as O}from"./Section-BY4zi19G.js";import{A as B}from"./ActionGroup-CzROJviL.js";import{s as C}from"./Action-DoHauz19.js";import{C as s}from"./CheckboxGroup-yA_I23_j.js";import{C as e}from"./Checkbox-DkBjtYJT.js";import{F as c}from"./FieldDescription-YWOUxJnG.js";import"./index-Cun1SEai.js";import"./dynamic-BqhEVzNx.js";import"./flowComponent-Cceoz8ap.js";import"./index-BzGnAInb.js";import"./clsx-B-dksMZM.js";import"./index-BCkzqzEU.js";import"./FieldError-yMhB6vk6.js";import"./IconWarning-BCagwmXL.js";import"./FieldError-DPTagllN.js";import"./utils-Dyxd3-sq.js";import"./Text-DVSB2R1T.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B51ecTCL.js";import"./context-OuuPOLWB.js";import"./browser-B97evyF-.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-JOCFYh16.js";import"./Hidden-B6GGwvwy.js";import"./Text-DQcec0AG.js";import"./EmulatedBoldText-Da4iAST0.js";import"./LoadingSpinner-ju42Rriq.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BdISzqDC.js";import"./ProgressBar-CwnBBaoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-7iMHywUA.js";import"./useFocus-DHjekZqL.js";import"./useFocusRing-w77Sy5gu.js";import"./useFocusable-C9nsuFPZ.js";import"./ContextMenuSection-BZN_5wKO.js";import"./Dialog-D2IuAywV.js";import"./RSPContexts-C8qhDI2w.js";import"./OverlayArrow-DQGSQRaj.js";import"./useControlledState-CwLLr83F.js";import"./Collection-Bj68a-ij.js";import"./CollectionBuilder-1DpsfIN0.js";import"./SelectionIndicator-DjYZoC83.js";import"./Separator-7MWrsQei.js";import"./SelectionManager-CnAC5LUd.js";import"./useEvent-VfxjGHfX.js";import"./useCollator-W6_B_X8C.js";import"./FocusScope-BV_8rP7c.js";import"./VisuallyHidden-CZsUJsM2.js";import"./getActionGroupSlot-CRH0bVBh.js";import"./useStatic-FLOcJlac.js";import"./context-C6LdJJW6.js";import"./ColumnLayout-fRq8lLCW.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-CHy9hJsR.js";import"./Form-aYocGFK9.js";import"./useFormValidation-PRBMAw7o.js";import"./useToggleState-DMPmy5mL.js";import"./useFormReset-dEYYJoAx.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Lr={title:"Integrations/React Hook Form/CheckboxGroup",component:b,render:()=>{const o=async t=>{await C(1500),g(t)},F=f({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),n=k();return r.jsx(v,{form:F,onSubmit:o,children:r.jsxs(O,{children:[r.jsx(n,{name:"interests",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsDefaultValue",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check at least 1 item"})]})}),r.jsx(n,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(c,{children:"Check max 2 items"})]})}),r.jsx(B,{children:r.jsx(l,{type:"submit",children:"Submit"})})]})})}},m={},a={render:()=>{const o=f();return r.jsxs(v,{form:o,onSubmit:async()=>await C(2e3),children:[r.jsx(b,{name:"text",rules:{required:!0},children:r.jsxs(s,{l:[1,1,1],m:[1,1],children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(l,{type:"submit",children:"Submit"})]})}};var p,u,h;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(u=m.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var d,x,j;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
