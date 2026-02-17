import{r as v,j as e}from"./iframe-olJof__V.js";import{a as l,u as d,F as u,R as h,S as f,t as F}from"./ResetButton-BRjZN70o.js";import{L as i}from"./Label-6dyeRQav.js";import{B as c}from"./Button-CPlz8rsS.js";import{S as R}from"./Section-xajLDDkQ.js";import{A as b}from"./ActionGroup-7XqXhcJT.js";import{s as p}from"./ActionBatch-DqsTFo-5.js";import{R as t,a as r}from"./Radio-pXTFSSoo.js";import"./RadioButton-G0LqzDNw.js";import{F as g}from"./FieldError-l4UC5eIi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C_FBHMxE.js";import"./flowComponent-CoGNni0d.js";import"./index-DXuGOHKQ.js";import"./clsx-B-dksMZM.js";import"./index-CQizCcaV.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./context-DOTF4vQp.js";import"./ActionGroupView-wpokCcfL.js";import"./Content-BTv2gojb.js";import"./Heading-CFjejIim.js";import"./Heading-CZbujKCp.js";import"./RSPContexts-BVirgRiO.js";import"./utils-B7tchdhx.js";import"./Text-Dd-S15-B.js";import"./browser-IACFT9IC.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./Text-PinZmeRI.js";import"./Modal-DS-pjQYs.js";import"./useOverlayController-CA843Gf5.js";import"./useStatic-DVdbIJHO.js";import"./Overlay-CYa-63WO.js";import"./OverlayContextProvider-DbMF0xyh.js";import"./LoadingSpinner-CT-rb4W5.js";import"./IconWarning-Dxqo3db7.js";import"./remote-BFSWQwUW.js";import"./Dialog-DOR07iZd.js";import"./Button-BzbIVXwM.js";import"./ProgressBar-CgXlpLJ2.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtYRRhYq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-UZLq5kUQ.js";import"./useFocus-C7qSpl6p.js";import"./useFocusRing-D32aTWMq.js";import"./useFocusable-3WtiVhvt.js";import"./OverlayArrow-B-0VQUib.js";import"./useControlledState-CGGJ5ydn.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./SelectionIndicator-D2HcZFFA.js";import"./Separator-8BcW__js.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./FocusScope-Db9L4ciT.js";import"./VisuallyHidden-D0VqbVmf.js";import"./ButtonView-BwM21LNf.js";import"./Flex-6XeWCvWa.js";import"./useRef-BVHeJ4xv.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C9tKIY6H.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./ColumnLayout-BPvI-4gN.js";import"./useFieldComponent-BI2nSVzd.js";import"./useMakeFocusable-B2LuhDHE.js";import"./RadioGroup-CbhhHe1q.js";import"./FieldError-kWwHEGnK.js";import"./Form-C73O4P0Z.js";import"./useFormValidation-D5cIPr0y.js";import"./useFormReset-BYGWiUrU.js";import"./AlertText-DHxSCH5W.js";import"./AlertIcon-DL26tbpe.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,S=E("submit"),Ye={title:"Integrations/React Hook Form/RadioGroup",component:l,render:()=>{const o=async j=>{await p(1500),S(j)},x=d({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),m=F();return e.jsx(u,{form:x,onSubmit:o,children:e.jsxs(R,{children:[e.jsx(m,{name:"gender",children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(m,{name:"genderDefaultValue",children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(m,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const o=d();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"}),e.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const o=d();return e.jsxs(u,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <RadioGroup>
            <Label>Gender</Label>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="diverse">Diverse</Radio>
          </RadioGroup>
        </Field>
        <RadioGroup isInvalid>
          <Label>Gender</Label>
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
          <Radio value="diverse">Diverse</Radio>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </RadioGroup>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <RadioGroup>
            <Label>Gender</Label>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="diverse">Diverse</Radio>
          </RadioGroup>
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
}`,...a.parameters?.docs?.source}}};const ze=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,a as WithFocus,ze as __namedExportsOrder,Ye as default};
