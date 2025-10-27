import{j as r,r as x}from"./iframe-QQgxjfU-.js";import{a as p,u as d,F as c,t as F}from"./Form-Bc9x2LYG.js";import{L as t}from"./Label-TUk01fEf.js";import{B as a}from"./Button-BWu_s2A1.js";import{S as j}from"./Section-DXb3tH7e.js";import{A as b}from"./ActionGroup-CwMcSxbk.js";import{s as l}from"./Action-DetrUASE.js";import{J as u,h as E,L as D}from"./DateField-DhpOSqb4.js";import{D as o}from"./DatePicker-BrsyNAfX.js";import{F as S}from"./useFieldComponent-B5mMljfV.js";import"./index-nuYtCEEu.js";import"./flowComponent--EocvfBi.js";import"./index-BLcKU5Vx.js";import"./clsx-B-dksMZM.js";import"./index-3NdHptBj.js";import"./useLocalizedStringFormatter-B91t6rxR.js";import"./context-CRx6Bs8B.js";import"./browser-CvCNE6Dh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-0zOMPJ7B.js";import"./utils-DhA81qjX.js";import"./Hidden-4F2-2j_N.js";import"./IconWarning-CSQYjrC1.js";import"./Text-CRs-OO-e.js";import"./EmulatedBoldText-DL56_OWd.js";import"./Text-D_WC5Uss.js";import"./LoadingSpinner-DsHmX75T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D9YKuqRT.js";import"./ProgressBar-DarvvV7I.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BVJbXyTi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BIrX7kgo.js";import"./useFocus-0cMRA2DE.js";import"./useFocusRing-UOKs1Fh8.js";import"./useFocusable-ClkP-4lm.js";import"./ContextMenuSection-BZb_tlaR.js";import"./Dialog-D5kgP22k.js";import"./RSPContexts-CsH1Ib1c.js";import"./OverlayArrow-8rZ2ifiK.js";import"./useControlledState-CkoNAxF1.js";import"./Collection-BHgWnzFo.js";import"./CollectionBuilder-8HmDsnbK.js";import"./SelectionIndicator-KO2l2gWQ.js";import"./Separator-BjOsH73i.js";import"./SelectionManager-okGnjmMp.js";import"./useEvent-ChbsxOK6.js";import"./useCollator-Dex40a3g.js";import"./FocusScope-Bg9evWjP.js";import"./VisuallyHidden-B95C2FUL.js";import"./dynamic-BjF6TIyL.js";import"./getActionGroupSlot-AfJwTJD5.js";import"./useStatic-B5jRDwsJ.js";import"./context-C73KBwIX.js";import"./Form-w-Aai7lh.js";import"./Group-fEBq4Exh.js";import"./Input-BMf7xRQe.js";import"./useFormValidation-CrlfASAQ.js";import"./useFormReset-C3QpCCH-.js";import"./useSpinButton-DWur5Dcr.js";import"./useFilter-B1UVIp9z.js";import"./Popover-6OcPTHJw.js";import"./useOverlayController-nxYv6OIh.js";import"./OverlayContextProvider-DVG4wpYy.js";import"./ClearPropsContextView-DUKOvykV.js";import"./ClearPropsContext-C1xOcMSE.js";import"./RangeCalendar-BUybExw0.js";import"./Heading-SF4sVKWG.js";import"./useUpdateEffect-cGZlgHGV.js";import"./useMakeFocusable-DfOzNy-a.js";import"./react-children-utilities-2-HBtGkG.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:p,render:()=>{const e=async h=>{await l(1500),g(h)},f=d({defaultValues:{dateDefaultValue:u("2025-09-01")}}),i=F();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:E(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsx(b,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},m={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,n as WithFocus,Jr as __namedExportsOrder,Hr as default};
