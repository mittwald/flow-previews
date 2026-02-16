import{r as v,j as e}from"./iframe-CIhdjqSz.js";import{a as l,u as d,F as u,R as h,S as f,t as F}from"./ResetButton-BOR4CHdA.js";import{L as i}from"./Label-DvNJKWaN.js";import{B as c}from"./Button--NFWCTgK.js";import{S as R}from"./Section-DcDeoOZJ.js";import{A as b}from"./ActionGroup-CRpQMoSl.js";import{s as p}from"./ActionBatch-DvjVnKvH.js";import{R as t,a as r}from"./Radio-CEEA2Ybs.js";import"./RadioButton-D24OlTPL.js";import{F as g}from"./FieldError-C6Vi3jlh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DC2aGj60.js";import"./flowComponent-BeD38kgF.js";import"./index-OQlE9mt9.js";import"./clsx-B-dksMZM.js";import"./index-D2Zvq_HV.js";import"./Overlay-knx40pXC.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./LoadingSpinner-CnQRgWlh.js";import"./IconWarning-NrGPSND5.js";import"./remote-C6ukCFNy.js";import"./utils-3Ll5mTsj.js";import"./Dialog-BaKpGYJ_.js";import"./Button-DTpgNeLS.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-wcYinYgg.js";import"./context-C9Id__Ro.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BAXbDaCF.js";import"./useFocus-CB1MjZml.js";import"./useFocusRing-ChVqcxnp.js";import"./useFocusable-DArPbii_.js";import"./RSPContexts-FgSmVkcq.js";import"./OverlayArrow-C-y_PFkG.js";import"./useControlledState-Bhs9bgfq.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./SelectionIndicator-BybBuRuw.js";import"./Separator-CvRy5z-e.js";import"./Text-BWZGL9q7.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./useCollator-DNIGrhrL.js";import"./FocusScope-DnRcaDs5.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./VisuallyHidden-Szd7uPuS.js";import"./ActionGroupView-DErmmX1C.js";import"./Content-C_lJcoxE.js";import"./Heading-DFMRUW3K.js";import"./Heading-N3mW0_Ma.js";import"./Text-DgrqnOua.js";import"./browser-BTfojbbK.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./Modal-BPdWM4cS.js";import"./ButtonView-DCesTJ_4.js";import"./Flex-JT-R-kzn.js";import"./useRef-ZatrU-r0.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B32Hv_M2.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./ColumnLayout-D6V36ZCl.js";import"./useFieldComponent-BDBEatho.js";import"./useMakeFocusable-UREXot88.js";import"./RadioGroup-DuWUGd8w.js";import"./FieldError-BrGZX-9W.js";import"./Form-C-8UFtdt.js";import"./useFormValidation-kYNpgjw2.js";import"./useFormReset-CCc0UGFI.js";import"./AlertText-DmXHc8ur.js";import"./AlertIcon-DlNCugjU.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,S=E("submit"),Ye={title:"Integrations/React Hook Form/RadioGroup",component:l,render:()=>{const o=async j=>{await p(1500),S(j)},x=d({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),m=F();return e.jsx(u,{form:x,onSubmit:o,children:e.jsxs(R,{children:[e.jsx(m,{name:"gender",children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(m,{name:"genderDefaultValue",children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx(m,{name:"genderRequired",rules:{required:"Please select your gender"},children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(b,{children:[e.jsx(h,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const o=d();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"}),e.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const o=d();return e.jsxs(u,{form:o,onSubmit:async()=>await p(2e3),children:[e.jsx(l,{name:"field",children:e.jsxs(t,{children:[e.jsx(i,{children:"Gender"}),e.jsx(r,{value:"male",children:"Male"}),e.jsx(r,{value:"female",children:"Female"}),e.jsx(r,{value:"diverse",children:"Diverse"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(h,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
