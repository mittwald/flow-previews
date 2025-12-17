import{j as r,r as S}from"./iframe-BXRQqxRF.js";import{u as n,F as p}from"./Form-DX4KpEqW.js";import{L as m}from"./Label-Dw-KVlkl.js";import{F as a,t as x}from"./Field-DoKu5q0S.js";import{B as d}from"./Button-C0lHC6Ss.js";import{S as j}from"./Section-o_ikZ1pf.js";import{A as b}from"./ActionGroup-CBAIlTo2.js";import{s as c}from"./Action-Co1N5x-Q.js";import{S as s}from"./SearchField-BpJ6n3eW.js";import{F as E}from"./FieldError-B377POAw.js";import{R as u}from"./ResetButton-nNJpj6Ef.js";import{S as l}from"./SubmitButton-DOYZAAXH.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-JidmR7ov.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-5zToaHXd.js";import"./index-BTygn0L6.js";import"./index-L-QBIyGf.js";import"./useLocalizedStringFormatter-C8dyVGX6.js";import"./context-Cfx64TkI.js";import"./Label-x3iOqkWL.js";import"./utils-W_wb_I6t.js";import"./Hidden-CXQdbF07.js";import"./dynamic-CLAkwN-B.js";import"./IconChevronDown-CrvlnwL_.js";import"./remote-B9tgrHbM.js";import"./IconX-DvHkgbt1.js";import"./IconCheck-BZ_7T0kt.js";import"./Text-KdIVkcjD.js";import"./EmulatedBoldText-DAyJKQWP.js";import"./Text-gjZ6zRux.js";import"./LoadingSpinner-Qtcd5nhZ.js";import"./ariaLive-BBnf0-S_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DlzDIGUo.js";import"./ProgressBar-Bu0Rvbqr.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwfjYi-F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DljSeqhE.js";import"./useFocus-BYFFuSzP.js";import"./useFocusRing-mlfcq67k.js";import"./useFocusable-Bn1h_ZhV.js";import"./ContextMenuSection-CcbfbV9b.js";import"./lib-90ocxLs-.js";import"./Dialog-CBkTvNeJ.js";import"./RSPContexts-DBwrNRvT.js";import"./OverlayArrow-Bw8tO6jb.js";import"./useControlledState-DF5Prxi4.js";import"./Collection-XN92eLRe.js";import"./CollectionBuilder-BhdaTyDp.js";import"./SelectionIndicator-CTy77egS.js";import"./Separator-D8Gi_H7t.js";import"./SelectionManager-Bic6iT0p.js";import"./useEvent-D_VKrqjP.js";import"./useCollator-CBeXlDOU.js";import"./FocusScope-CDou2-z6.js";import"./VisuallyHidden-DvIs4LpA.js";import"./getActionGroupSlot-BkAF4Kgk.js";import"./useStatic-CDs84s8f.js";import"./context-BJK7zy3l.js";import"./useFieldComponent-y0XT-9Ew.js";import"./IconClose-BUhhZBm5.js";import"./IconSearch-Ds96boib.js";import"./useControlledHostValueProps-PQJrtPeA.js";import"./FieldError-Cw_rtSeq.js";import"./Form-k8rVjsdW.js";import"./Group-C8fsqvgi.js";import"./Input-COh9rz8g.js";import"./useTextField-Dm9Ssc5y.js";import"./useFormReset-BZsjU1hv.js";import"./useFormValidation-tPOMEO92.js";import"./IconDanger-B1opIkZE.js";import"./useRef-C3fqYXg-.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
