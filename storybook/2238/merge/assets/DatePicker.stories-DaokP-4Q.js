import{j as r,r as j}from"./iframe-DB4UlQ_F.js";import{b as a,u as d,F as p,t as b}from"./Form-CprAAj6n.js";import{L as t}from"./Label-D60b9GFw.js";import{R as f,S as h}from"./ResetButton-Cbtj9u5S.js";import{B as u}from"./Button-DYIAULzM.js";import{S as E}from"./Section-CwTyfRBn.js";import{A as S}from"./ActionGroup-DYVJBbzZ.js";import{s as c}from"./Action-D44Jy6S7.js";import{I as l,f as D,K as B}from"./DateInput-D1hSR94U.js";import{D as o}from"./DatePicker-CPwu0clu.js";import{F as g}from"./FieldError-7mdFLW8I.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CewJ3DJw.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./clsx-B-dksMZM.js";import"./index-BSqJ1-JW.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./context-BeH9c2u_.js";import"./browser-CMEWPYW9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CzwPVXKy.js";import"./utils-B6Q0cVYp.js";import"./Hidden-BofTzQhQ.js";import"./useRef-D2qb2cPS.js";import"./IconWarning-D6sMwWyV.js";import"./remote-DOdcl-CB.js";import"./Text-CvhufvNl.js";import"./EmulatedBoldText-1LQNM6BM.js";import"./Text-De_rG2Pz.js";import"./LoadingSpinner-BUzKTNdb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-L-mN_PGj.js";import"./ProgressBar-BtSLHqLj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-bn4O9qyi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDGll4uD.js";import"./useFocus-mLt6Jcka.js";import"./useFocusRing-BToYuWbv.js";import"./useFocusable-BfPamkyW.js";import"./ContextMenuSection-BHyvjJMz.js";import"./Dialog-B4nT46da.js";import"./RSPContexts-Br1rngEm.js";import"./OverlayArrow-BH8gVRz-.js";import"./useControlledState-2lUl0kro.js";import"./Collection-e6TIFm8x.js";import"./CollectionBuilder-DlEUUA4I.js";import"./SelectionIndicator-D87wG6Zb.js";import"./Separator-Bcm53B3D.js";import"./SelectionManager-Ber2ZhG4.js";import"./useEvent-C6FAavwc.js";import"./useCollator-BdTHcpkR.js";import"./FocusScope-D57vEPf5.js";import"./VisuallyHidden-C3r-i5Fv.js";import"./getActionGroupSlot-BJEuMMsc.js";import"./useStatic-BsW-2tBw.js";import"./context-b0VtR6po.js";import"./FieldError-CegzLELq.js";import"./Form-PeScrtUS.js";import"./Group-DyD1FYug.js";import"./Input-DgHFnA4a.js";import"./useFormValidation-Bt0uBrAk.js";import"./useFormReset-zmgaZOpR.js";import"./useSpinButton-nCFgk4b8.js";import"./useFilter-CP__Oj05.js";import"./useFieldComponent-Dp69OqtL.js";import"./Popover-C9bomiWQ.js";import"./useOverlayController-BTqpKE5m.js";import"./OverlayContextProvider-CZHDlMnp.js";import"./RangeCalendar-DAgLIaBh.js";import"./Heading-BIcTvsYt.js";import"./useUpdateEffect-DtzDToZb.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),Ur={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=d({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(p,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:l("2025-09-01")}});return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Ur as default};
