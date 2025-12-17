import{j as r,r as S}from"./iframe-D8Xbwx9P.js";import{u as n,F as p}from"./Form-BKjzG_tJ.js";import{L as m}from"./Label-DAN_V0xJ.js";import{F as a,t as x}from"./Field-BWhdEMQM.js";import{B as d}from"./Button-DnjfJoF3.js";import{S as j}from"./Section--74qKuLo.js";import{A as b}from"./ActionGroup-DOap5xNu.js";import{s as c}from"./Action-Dmcwzy-D.js";import{S as s}from"./SearchField-s6646BDP.js";import{F as E}from"./FieldError-SqDTuGjU.js";import{R as u}from"./ResetButton-BhCUvUAd.js";import{S as l}from"./SubmitButton-D7ICDBM3.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BEcu8ny4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CigogB48.js";import"./index-CYTinXvO.js";import"./index-BkN34slO.js";import"./useLocalizedStringFormatter-CXsD6kYA.js";import"./context-CMvcEg-k.js";import"./Label-rFd_FIkn.js";import"./utils-C3Tuzz6i.js";import"./Hidden-zhCtJ-LB.js";import"./dynamic-C7V4-Zrv.js";import"./IconApp-Ch7b1vIu.js";import"./remote-BpFUxGPl.js";import"./IconX-HMFf4w5l.js";import"./IconCheck-Djd4ZBy_.js";import"./Text-ZHIm2izM.js";import"./EmulatedBoldText-Cd0UPmPK.js";import"./Text-C0Eqp9FN.js";import"./LoadingSpinner-CRZU7QZf.js";import"./ariaLive-CRfqyPSL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-WVOu4VhQ.js";import"./ProgressBar-CVumlVqB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DE67nUnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CvIVggVb.js";import"./useFocus-D1eNONK1.js";import"./useFocusRing-kQK9kbZa.js";import"./useFocusable-CozNvSU7.js";import"./ContextMenuSection-Dzw50vnG.js";import"./lib-90ocxLs-.js";import"./Dialog-Du_kPH7o.js";import"./RSPContexts-CsOhl7yw.js";import"./OverlayArrow-CaVIvu7y.js";import"./useControlledState-YZIEyxRh.js";import"./Collection-CquzgsCv.js";import"./CollectionBuilder-Cl1VQ76h.js";import"./SelectionIndicator-DvsfeWbh.js";import"./Separator-0bv_QzU7.js";import"./SelectionManager-CxpfoWMp.js";import"./useEvent-BrS2p23g.js";import"./useCollator-CoCLyJRC.js";import"./FocusScope-_ezdgzai.js";import"./VisuallyHidden-0JTBVxma.js";import"./getActionGroupSlot-cjlWHciT.js";import"./useStatic-76h0-2Qu.js";import"./context-DTPirBdX.js";import"./useFieldComponent-BVJ72uhW.js";import"./IconClose-nKEyU94I.js";import"./IconSearch-dF9zYle-.js";import"./useControlledHostValueProps-ZIMeorcT.js";import"./FieldError-BOU-ptKT.js";import"./Form-BSjJ02XH.js";import"./Group-K-eCqnjR.js";import"./Input-CwYJ6Hjz.js";import"./useTextField-DKCJiEJc.js";import"./useFormReset-7Q0iJ7bt.js";import"./useFormValidation-Bi2FjDm7.js";import"./IconDanger-DO15Hi94.js";import"./useRef-COaHDyfp.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
