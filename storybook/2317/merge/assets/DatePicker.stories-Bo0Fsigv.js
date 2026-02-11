import{r as j,j as r}from"./iframe-DN5oj4yX.js";import{a,u as p,F as d,R as f,S as h,t as b}from"./ResetButton-B5ThXBL6.js";import{L as t}from"./Label-DdsftIej.js";import{B as u}from"./Button-CF7BcIrS.js";import{S as E}from"./Section-DsnEjQ43.js";import{A as S}from"./ActionGroup-pSqLGzLz.js";import{s as c}from"./Action-GYKv85ul.js";import{I as l,f as D,K as B}from"./DateInput-s24aTkOC.js";import{D as o}from"./DatePicker-CvjdRZFr.js";import{F as g}from"./FieldError-CqFPhrQB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D_PfG4t1.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./clsx-B-dksMZM.js";import"./index-DUndj3nA.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./context-BQuP-QJJ.js";import"./useRef-C2EU3C7-.js";import"./utils-u73lU7bl.js";import"./ButtonView-yRoRDfha.js";import"./browser-t02O3gv-.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./IconWarning-C1DuEctF.js";import"./remote-CDfMg8I2.js";import"./Text-B6wg_w_v.js";import"./EmulatedBoldText-rvhjeWKi.js";import"./Text-mAHBNKmk.js";import"./LoadingSpinner-IkyiKoyX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BQ5wMWnN.js";import"./ProgressBar-ChQMk24B.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-52-JVqkW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-dDK8KT2l.js";import"./useFocus-CanfFAPv.js";import"./useFocusRing-Cbnk9x9v.js";import"./useFocusable-6yyx7e1u.js";import"./ContextMenuSection-D4h9xx_Q.js";import"./Dialog-CpK4NMTe.js";import"./RSPContexts-CT4Rd2GX.js";import"./OverlayArrow-BufWJWwU.js";import"./useControlledState-Dl4qb5FM.js";import"./Collection-DN16OmDe.js";import"./CollectionBuilder-CE82C-kz.js";import"./SelectionIndicator-BsSExIou.js";import"./Separator-CB9FghXV.js";import"./SelectionManager-upRYqEYI.js";import"./useEvent-CkPyHfFN.js";import"./useCollator-DUmbl0t5.js";import"./FocusScope-BtxR-tB9.js";import"./VisuallyHidden-BipIpOcd.js";import"./getActionGroupSlot-B3lnxGbD.js";import"./useStatic-D8kDoy_M.js";import"./context-BOqeUKEn.js";import"./FieldError-lE_N68JV.js";import"./Form-Cz7a81_t.js";import"./Group-DgbPGgBI.js";import"./Input-Bwk10Fre.js";import"./useFormReset-B44cc5VH.js";import"./useFormValidation-pAg62KPr.js";import"./useSpinButton-dnd_Vyro.js";import"./useFilter-DEKlOZWf.js";import"./useFieldComponent-DVOrWc0y.js";import"./Popover-BkLmPzXt.js";import"./useOverlayController-B28PiJc5.js";import"./OverlayContextProvider-BWiZzEmK.js";import"./RangeCalendar-DYkpaP99.js";import"./Heading-sKqg2l7g.js";import"./useUpdateEffect-BuSNTCXj.js";import"./AlertText-CB1nkD4I.js";import"./AlertIcon-DDaSQZAJ.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Yr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,zr as __namedExportsOrder,Yr as default};
