import{r as x,j as r}from"./iframe-BwxXT37i.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-BT6tMKqG.js";import{L as t}from"./Label-CT8SIJ3i.js";import{B as l}from"./Button-BPaKVUIt.js";import{S as b}from"./Section-DkCPmDIf.js";import{A as E}from"./ActionGroup-BeR34umf.js";import{s as c}from"./ActionBatch-BYAp_qkn.js";import{L as S}from"./DateInput-C6tL9dSW.js";import{T as o}from"./TimeField-A4EoVYEN.js";import{F as T}from"./FieldError-D9vbHNcD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-dswMj1gt.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./clsx-B-dksMZM.js";import"./index-DuE4n7_M.js";import"./Overlay-AD1OWyvg.js";import"./useOverlayController-Clvgh-dL.js";import"./useStatic-DbyoNtmr.js";import"./OverlayContextProvider-BTOkgjHO.js";import"./LoadingSpinner-C1b88oeC.js";import"./IconWarning-Dl-kSkvo.js";import"./remote-DESTNxfj.js";import"./utils-CJgL2cA6.js";import"./Dialog-B0vuTUBy.js";import"./Button-Cy0UoRmV.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClAEan5N.js";import"./context-CQJLc664.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bm2JbU_T.js";import"./useFocus-Czv-Zofa.js";import"./useFocusRing-m35H4vh1.js";import"./useFocusable-FNm71Fx1.js";import"./RSPContexts-CqVOzJuC.js";import"./OverlayArrow-D6upTp02.js";import"./useControlledState-NXAAE7WV.js";import"./Collection-CBsMtROt.js";import"./CollectionBuilder-C9gwXR-G.js";import"./SelectionIndicator-D823LuT6.js";import"./Separator-D3qEwsya.js";import"./Text-CMM9EMAj.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./VisuallyHidden-BP4pgppw.js";import"./ActionGroupView-lK7iQLI6.js";import"./Content-DSJl7gyc.js";import"./Heading-3o8VfDUm.js";import"./Heading-DQrX8nPA.js";import"./Text-COIxE5M6.js";import"./browser-DWx5NGhf.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./Modal-Ba2srwlL.js";import"./ButtonView-BxZPu1tu.js";import"./Flex-DzEskxqa.js";import"./useRef-CHinTfwY.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DLmcvkG_.js";import"./getActionGroupSlot-BlMz2vZa.js";import"./FieldError-BR2H8wuy.js";import"./Form-BRwB9VIC.js";import"./Group-Dxy68sjF.js";import"./Input-C_uCddka.js";import"./useFormReset-BZECQBSr.js";import"./useFormValidation-CcuhNi7t.js";import"./useSpinButton-CDNEHM9x.js";import"./useFilter-W6hAQXMO.js";import"./useFieldComponent-CUBWvnpR.js";import"./AlertText-CHWpHdzt.js";import"./AlertIcon-DLpjaGh3.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,zr as __namedExportsOrder,Yr as default};
