import{r as x,j as r}from"./iframe-uf-MKLgq.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-Cec_c7cn.js";import{L as o}from"./Label-CnhLMz3J.js";import{B as u}from"./Button-mfbo0dyR.js";import{S as g}from"./Section-DfvDcT38.js";import{A as b}from"./ActionGroup-Calx21Na.js";import{s as p}from"./ActionBatch-zb8alXiJ.js";import{N as t}from"./NumberField-vhWXYswi.js";import{F as E}from"./FieldDescription-Xe8FFH5r.js";import{F as S}from"./FieldError-DuL8_ys6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-fPlHFb8V.js";import"./flowComponent-CR1nBuBt.js";import"./index-B7owIbBs.js";import"./clsx-B-dksMZM.js";import"./index-CTOYeHPx.js";import"./useLocalizedStringFormatter-C1Nv7YrM.js";import"./context-DqOu6PGu.js";import"./ActionGroupView-D-VX7mUq.js";import"./Content-BG_xlhhi.js";import"./Heading-8mXYZ3pK.js";import"./Heading-C369PV89.js";import"./RSPContexts-nECt4NUH.js";import"./utils-DZ6AixXo.js";import"./Text-CwTgn3ty.js";import"./browser-CS6yJLU7.js";import"./EmulatedBoldText-BnnwN73K.js";import"./Text-DCWOF5Yr.js";import"./Modal-sJUQoHJz.js";import"./useOverlayController-CR9kocR-.js";import"./useStatic-CS2X9Zkf.js";import"./Overlay-B_vOLFC2.js";import"./OverlayContextProvider-D-yAmZxE.js";import"./LoadingSpinner-CRqWvqjj.js";import"./IconWarning-BGOvrRAj.js";import"./remote-7esdTMhw.js";import"./Dialog-CWJBmICf.js";import"./Button-Dm2G6Gzh.js";import"./ProgressBar-eIkI-azg.js";import"./Label-Cdykpluf.js";import"./Hidden-lq-QDLcj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CdaYwKww.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BdqiHW2G.js";import"./useFocus-BMvnG0Qw.js";import"./useFocusRing-190z59Bo.js";import"./useFocusable-C3B5EmJ3.js";import"./OverlayArrow-Cm4mIARd.js";import"./useControlledState-BuF4aZkb.js";import"./Collection-xojhNDd8.js";import"./CollectionBuilder-lmcmrTAc.js";import"./SelectionIndicator-DxP3RRah.js";import"./Separator-5pPigfCw.js";import"./SelectionManager-D4CiQoAv.js";import"./useEvent-B9v_LmSJ.js";import"./useCollator-BHzC2k5n.js";import"./FocusScope-1QvypY2n.js";import"./VisuallyHidden-CibrapRB.js";import"./ButtonView-D8n4Xnyv.js";import"./Flex-C_HgP_tu.js";import"./useRef-3qUKYuqY.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-HEPeHMf2.js";import"./getActionGroupSlot-BEjmNJ3B.js";import"./useFieldComponent-oiltg6td.js";import"./useControlledHostValueProps-CVNKjYkZ.js";import"./FieldError-hMdCLiLA.js";import"./Form-Clq2RMYH.js";import"./Group-DfUk4kcb.js";import"./Input-Da_fVGjz.js";import"./useFormValidation-DWm9SC-U.js";import"./useSpinButton-cDr9GReW.js";import"./useFormReset-D43--mAD.js";import"./useTextField--0uHRALa.js";import"./AlertText-CTyPJTrr.js";import"./AlertIcon-C9HYB2oh.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Qr as __namedExportsOrder,Jr as default};
