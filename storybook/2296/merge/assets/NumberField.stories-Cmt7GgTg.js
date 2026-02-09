import{j as r,r as x}from"./iframe-CJJ5mYnn.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-C05rPY-2.js";import{L as o}from"./Label-KzCwLrnq.js";import{B as p}from"./Button-Cm9iNCfL.js";import{S as g}from"./Section-K47s4uAu.js";import{A as b}from"./ActionGroup-m72PHNb8.js";import{s as u}from"./Action-DnpS_czG.js";import{N as t}from"./NumberField-DtIlWO7q.js";import{F as E}from"./FieldDescription-BR9EjEal.js";import{F as S}from"./FieldError-DFjBSzci.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CBA_L5x6.js";import"./flowComponent-BiwmgULL.js";import"./index-BXYeEKBx.js";import"./clsx-B-dksMZM.js";import"./index-BAQeQlIi.js";import"./useLocalizedStringFormatter-DftyoPOP.js";import"./context-DMBLfBJz.js";import"./useRef-BataXbH4.js";import"./utils-CzEQVu_B.js";import"./ButtonView-BZWbi-p0.js";import"./browser-Dno-4bzG.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Crm05hod.js";import"./Hidden-AXn-SW1d.js";import"./IconWarning-7VhmiBC1.js";import"./remote-__48vje9.js";import"./Text-DETIdekS.js";import"./EmulatedBoldText-Ddbav1xv.js";import"./Text-C_ulbvRg.js";import"./LoadingSpinner-BkLfehTA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBs8-zE9.js";import"./ProgressBar-DEVhhcDS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-x08fx3rG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BjSa1aTn.js";import"./useFocus-CcXCF9Et.js";import"./useFocusRing-DJCeTTlI.js";import"./useFocusable-BrXzadpt.js";import"./ContextMenuSection-JlR6lzy2.js";import"./Dialog-BJQKxFLq.js";import"./RSPContexts-BTWN0Dkl.js";import"./OverlayArrow-B9C6jKaR.js";import"./useControlledState-Bk661CCw.js";import"./Collection-B0Oi5e2R.js";import"./CollectionBuilder-DM6FVurg.js";import"./SelectionIndicator-t_QTWROb.js";import"./Separator-Ba2IdZvX.js";import"./SelectionManager-h8Xia05C.js";import"./useEvent-B7gpfAjJ.js";import"./useCollator-BLS40MVU.js";import"./FocusScope-Bpw-7kqG.js";import"./VisuallyHidden-CdWE-b-g.js";import"./getActionGroupSlot-BsVn5MxR.js";import"./useStatic-DKMjC4UR.js";import"./context-B6BNwR5M.js";import"./useFieldComponent-DJ8W8blY.js";import"./useControlledHostValueProps-CAr8fGsP.js";import"./FieldError-C22n8dTl.js";import"./Form-Di0BFhhp.js";import"./Group-Bb48B7zD.js";import"./Input-BDAHDxkc.js";import"./useFormValidation-DDUTP5mG.js";import"./useSpinButton-BeccFYlt.js";import"./useFormReset-Bwb9lNn2.js";import"./useTextField-RXxXKEvJ.js";import"./AlertText-DqO2-SeN.js";import"./AlertIcon-CvbzdPY4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};
