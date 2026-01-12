import{j as r,r as x}from"./iframe-DpNCYkDX.js";import{b as a,u as l,F as d,t as j}from"./Form-y1whqzWu.js";import{L as o}from"./Label-DxyEdRqz.js";import{R as c,S as f}from"./ResetButton-D3EbzuUq.js";import{B as p}from"./Button-CB8TQqfw.js";import{S as b}from"./Section-Xx985Qwf.js";import{A as g}from"./ActionGroup-DQeeqJWq.js";import{s as u}from"./Action-CnYZaomm.js";import{N as t}from"./NumberField-Cjn935Pr.js";import{F as E}from"./FieldDescription-CTMXceLM.js";import{F as S}from"./FieldError-CLVEK_uH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DOXkjdco.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./clsx-B-dksMZM.js";import"./index-lXFaKghW.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./context-Df7wrknH.js";import"./browser-BfCz5g6M.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DRXP2wjN.js";import"./utils-YaT_C2bO.js";import"./Hidden-AzE2Q4X1.js";import"./useRef-Daxuqj_w.js";import"./IconWarning-CcmUiij-.js";import"./remote-FHZXAXl3.js";import"./Text-Bp6u83O8.js";import"./EmulatedBoldText-DU1S0mM2.js";import"./Text-B4MgbG6f.js";import"./LoadingSpinner-mT2tjpr6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DAbgtjDL.js";import"./ProgressBar-BiLC8jqV.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtioSroH.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-OMCV4DY8.js";import"./useFocus-CLy8_GQ0.js";import"./useFocusRing-DWz_LOyJ.js";import"./useFocusable-BsZoANuz.js";import"./ContextMenuSection-BWIiCJCm.js";import"./Dialog-DtZU9YT9.js";import"./RSPContexts-_XCAh6rU.js";import"./OverlayArrow-DaAbsuct.js";import"./useControlledState-CFzFCELG.js";import"./Collection-B0Nu23OM.js";import"./CollectionBuilder-XTUTawTi.js";import"./SelectionIndicator-qbtLTFTY.js";import"./Separator-DkK11TMO.js";import"./SelectionManager-u_c2A7HJ.js";import"./useEvent-D64C7zgK.js";import"./useCollator-BChcYNiy.js";import"./FocusScope-DPz7ONOW.js";import"./VisuallyHidden-BhiVW_d3.js";import"./getActionGroupSlot-Uc-3WiS8.js";import"./useStatic-C-pVfuV7.js";import"./context-CUs0iBzd.js";import"./useFieldComponent-CtyBuaGz.js";import"./useControlledHostValueProps-BIankb3Z.js";import"./FieldError-DsNqYoam.js";import"./Form-Ce-l7r4o.js";import"./Group-3R2C1nbx.js";import"./Input-BuBJ2CWK.js";import"./useFormValidation-Db_N1-Xt.js";import"./useSpinButton-Dxb-FnDx.js";import"./useFormReset-BsRaFjct.js";import"./useTextField-DCYKGErD.js";import"./AlertText-DNWtIllY.js";import"./AlertIcon-CnmOZB_U.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,kr as default};
