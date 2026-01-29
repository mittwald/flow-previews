import{j as r,r as x}from"./iframe-DzPnzOIh.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-DLA2D0J0.js";import{L as o}from"./Label-Caopyz4i.js";import{B as p}from"./Button-B0xxYjKh.js";import{S as g}from"./Section-DjVn5x2V.js";import{A as b}from"./ActionGroup-BW-DIp4M.js";import{s as u}from"./Action-D4qqw_zO.js";import{N as t}from"./NumberField-Cxz_lEVr.js";import{F as E}from"./FieldDescription-CZk1e185.js";import{F as S}from"./FieldError-CliUFFQL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CR1FGrpS.js";import"./flowComponent-DtgvO3oD.js";import"./index-DmmYMLHe.js";import"./clsx-B-dksMZM.js";import"./index-nNa6hI3H.js";import"./useLocalizedStringFormatter-BZ1QP-fV.js";import"./context-D5QDMciq.js";import"./useRef-DTc68hRI.js";import"./utils-DdPADezN.js";import"./ButtonView-DAqv122X.js";import"./browser-DO1on-Lg.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BA4yL5_I.js";import"./Hidden-D_8gXEej.js";import"./IconWarning-Dnclh3SV.js";import"./remote-Df33k4AK.js";import"./Text-CgXXsRbz.js";import"./EmulatedBoldText-Dcz9uFEQ.js";import"./Text-CKGruhzq.js";import"./LoadingSpinner-3EdJH7-V.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CCOKLUK2.js";import"./ProgressBar-BDc0eUXF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DAdMc5BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-COgw0Owx.js";import"./useFocus-lCD3lNhC.js";import"./useFocusRing-h77ik7V4.js";import"./useFocusable-DMy60j_I.js";import"./ContextMenuSection-DfF2Gqpp.js";import"./Dialog-BkygjXx5.js";import"./RSPContexts-0XiJN6Nh.js";import"./OverlayArrow--imbHB5-.js";import"./useControlledState-C5NVaprX.js";import"./Collection-CALheanL.js";import"./CollectionBuilder-Bu5TLfEc.js";import"./SelectionIndicator-CD0MdUzw.js";import"./Separator-Bg_k8EGm.js";import"./SelectionManager-CchLMxAP.js";import"./useEvent-C5n8Jw-a.js";import"./useCollator-BX-7yLTW.js";import"./FocusScope-Cit_E5zj.js";import"./VisuallyHidden-C2tKF7nl.js";import"./getActionGroupSlot-BseyWuGA.js";import"./useStatic-B5sjyhg8.js";import"./context-CvuQDK5p.js";import"./useFieldComponent-DttoHSbm.js";import"./useControlledHostValueProps-HyXthDFl.js";import"./FieldError-BLx5YP6h.js";import"./Form-iisH2EsU.js";import"./Group-BGA5trRo.js";import"./Input-CP7U2NGu.js";import"./useFormValidation-DrH-jwNK.js";import"./useSpinButton-WCkPHhL4.js";import"./useFormReset-D5TocNhH.js";import"./useTextField-DtXvs3Hz.js";import"./AlertText-DawifhT6.js";import"./AlertIcon-BAMux0CS.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
