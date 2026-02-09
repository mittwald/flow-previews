import{r as F,j as r}from"./iframe-DQCyQvTg.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-Db-hkPs1.js";import{B as d}from"./Button-BuvZu5FH.js";import{S as x}from"./Section-1ggmv6HF.js";import{A as E}from"./ActionGroup-BrDI4M3_.js";import{s as c}from"./Action-BFqm9nZf.js";import{S as m}from"./Switch-BJRzuZmY.js";import{F as j}from"./FieldError-Db3KB_ND.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLdLSboA.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./clsx-B-dksMZM.js";import"./index-vqo-_XTj.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./context-BVR1xsiE.js";import"./useRef-DxaR4mJH.js";import"./utils-B-47qEzM.js";import"./ButtonView-DfoPfFoM.js";import"./browser-NLzega1a.js";import"./IconWarning-BsBEN2i7.js";import"./remote-DwYKdEj8.js";import"./Text-Dy3rf6Sf.js";import"./EmulatedBoldText-BkRIKdgp.js";import"./Text-dCr4PfuU.js";import"./LoadingSpinner-C2L8sUPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BqVXXUXM.js";import"./ProgressBar-CvxDZlN2.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CgNKGrTG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BDNCZxcv.js";import"./useFocus-MHK9Bgmz.js";import"./useFocusRing-H28TAT4s.js";import"./useFocusable-Bi17AcBv.js";import"./ContextMenuSection-CRl2t-Sj.js";import"./Dialog-l1ZI7Q43.js";import"./RSPContexts-CbSXEXlJ.js";import"./OverlayArrow-BRUQmdEx.js";import"./useControlledState-CSGe32xq.js";import"./Collection-Dvx0GJ5C.js";import"./CollectionBuilder-G7sQB9cg.js";import"./SelectionIndicator-BqvLdNe9.js";import"./Separator-CkdPEWsl.js";import"./SelectionManager-C7NRhxAL.js";import"./useEvent-BSjlxpLx.js";import"./useCollator-Dr7oYRVM.js";import"./FocusScope-DgjO-P_8.js";import"./VisuallyHidden-DTZCmZoD.js";import"./getActionGroupSlot--rri3fdD.js";import"./useStatic-XhnoWRRg.js";import"./context-CMTFLv9Z.js";import"./useFieldComponent-BQB8jFXR.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Driw9LeX.js";import"./useFormReset-3qpl4kR-.js";import"./FieldError-BsUvM9FZ.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
