import{r as x,j as r}from"./iframe-BwxXT37i.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-BT6tMKqG.js";import{L as o}from"./Label-CT8SIJ3i.js";import{B as u}from"./Button-BPaKVUIt.js";import{S as g}from"./Section-DkCPmDIf.js";import{A as b}from"./ActionGroup-BeR34umf.js";import{s as p}from"./ActionBatch-BYAp_qkn.js";import{N as t}from"./NumberField-D_QeBVDM.js";import{F as E}from"./FieldDescription-BR2v-b2T.js";import{F as S}from"./FieldError-D9vbHNcD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-dswMj1gt.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./clsx-B-dksMZM.js";import"./index-DuE4n7_M.js";import"./Overlay-AD1OWyvg.js";import"./useOverlayController-Clvgh-dL.js";import"./useStatic-DbyoNtmr.js";import"./OverlayContextProvider-BTOkgjHO.js";import"./LoadingSpinner-C1b88oeC.js";import"./IconWarning-Dl-kSkvo.js";import"./remote-DESTNxfj.js";import"./utils-CJgL2cA6.js";import"./Dialog-B0vuTUBy.js";import"./Button-Cy0UoRmV.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClAEan5N.js";import"./context-CQJLc664.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bm2JbU_T.js";import"./useFocus-Czv-Zofa.js";import"./useFocusRing-m35H4vh1.js";import"./useFocusable-FNm71Fx1.js";import"./RSPContexts-CqVOzJuC.js";import"./OverlayArrow-D6upTp02.js";import"./useControlledState-NXAAE7WV.js";import"./Collection-CBsMtROt.js";import"./CollectionBuilder-C9gwXR-G.js";import"./SelectionIndicator-D823LuT6.js";import"./Separator-D3qEwsya.js";import"./Text-CMM9EMAj.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./VisuallyHidden-BP4pgppw.js";import"./ActionGroupView-lK7iQLI6.js";import"./Content-DSJl7gyc.js";import"./Heading-3o8VfDUm.js";import"./Heading-DQrX8nPA.js";import"./Text-COIxE5M6.js";import"./browser-DWx5NGhf.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./Modal-Ba2srwlL.js";import"./ButtonView-BxZPu1tu.js";import"./Flex-DzEskxqa.js";import"./useRef-CHinTfwY.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DLmcvkG_.js";import"./getActionGroupSlot-BlMz2vZa.js";import"./useFieldComponent-CUBWvnpR.js";import"./useControlledHostValueProps-C4XwIoTW.js";import"./FieldError-BR2H8wuy.js";import"./Form-BRwB9VIC.js";import"./Group-Dxy68sjF.js";import"./Input-C_uCddka.js";import"./useFormValidation-CcuhNi7t.js";import"./useSpinButton-CDNEHM9x.js";import"./useFormReset-BZECQBSr.js";import"./useTextField-COT4ct8W.js";import"./AlertText-CHWpHdzt.js";import"./AlertIcon-DLpjaGh3.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
