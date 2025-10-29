import{j as r,r as x}from"./iframe-B8r8XrPb.js";import{a as p,u as d,F as c,t as F}from"./Form-DuDUSxCv.js";import{L as t}from"./Label-PmVCxAho.js";import{B as a}from"./Button-x8S8uZ_3.js";import{S as j}from"./Section-DbQ-wmnj.js";import{A as b}from"./ActionGroup-COWTQNIi.js";import{s as l}from"./Action-DHR-Mkls.js";import{J as u,h as E,L as D}from"./DateField-K9a-JU82.js";import{D as o}from"./DatePicker-BRU0tPua.js";import{F as S}from"./FieldError-Cr-OeICt.js";import"./index-nuYtCEEu.js";import"./dynamic-Bnt25vOJ.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./clsx-B-dksMZM.js";import"./index-ChMccDi0.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./context-d7knuPTA.js";import"./browser-5JWtNQpe.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DhvUjtv7.js";import"./utils-B2sHMxfy.js";import"./Hidden-C0uurl-T.js";import"./IconWarning-BnpSGPSL.js";import"./Text-CxxNxEUo.js";import"./EmulatedBoldText-DH8-rljC.js";import"./Text-DsIbOJYe.js";import"./LoadingSpinner-bZO-WOXG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DOtSsu3o.js";import"./ProgressBar-9fERUQ0g.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn_yI2FK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BPC_OlSs.js";import"./useFocus-Co_XlsN_.js";import"./useFocusRing-DGaivw0f.js";import"./useFocusable-USAcjdfT.js";import"./ContextMenuSection-Cnztb-zU.js";import"./Dialog-DJ22CsqV.js";import"./RSPContexts-Do_0M-hc.js";import"./OverlayArrow-Cf4VI4sB.js";import"./useControlledState-Dhb_P5xS.js";import"./Collection-Dst8UlSd.js";import"./CollectionBuilder-C1D-HmCC.js";import"./SelectionIndicator-BHwOxkNR.js";import"./Separator-BqgRmmFG.js";import"./SelectionManager-kzjy3-H4.js";import"./useEvent-BY3XUUFC.js";import"./useCollator-CG3LD3jQ.js";import"./FocusScope-DHLNAyY7.js";import"./VisuallyHidden-DvNHrLSk.js";import"./getActionGroupSlot-BOj_bO4_.js";import"./useStatic-Qi3p0Ena.js";import"./context-tqHfsDuk.js";import"./useFieldComponent-DByhNd_z.js";import"./ClearPropsContext-BX2g1WFh.js";import"./Form-C0W2Agsa.js";import"./Group-DkjxT4kZ.js";import"./Input-Cyh52Hgt.js";import"./useFormValidation-DuuScCCl.js";import"./useFormReset-Cpg0SQow.js";import"./useSpinButton-xd5u1ryO.js";import"./useFilter-CXlM-266.js";import"./Popover-CHTa2a8I.js";import"./OverlayContextProvider-C-xiKcZu.js";import"./ClearPropsContextView-CH1TrHU5.js";import"./RangeCalendar-BVV0vTq1.js";import"./Heading-BM099qXJ.js";import"./useUpdateEffect-D2KjkFCD.js";import"./useMakeFocusable-DmR7nfCv.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Gr={title:"Integrations/React Hook Form/DatePicker",component:p,render:()=>{const e=async h=>{await l(1500),g(h)},f=d({defaultValues:{dateDefaultValue:u("2025-09-01")}}),i=F();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:E(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsx(b,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
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
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
