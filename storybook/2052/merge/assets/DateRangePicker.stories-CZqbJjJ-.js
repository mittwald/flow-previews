import{j as e,r as P}from"./iframe-CuPb25cv.js";import{a as c,u as l,F as p,t as B}from"./Form-D3dPEjiA.js";import{L as t}from"./Label-BZpLTozc.js";import{B as m}from"./Button-Cy_FSVpl.js";import{S as L}from"./Section-B55_57D7.js";import{A as k}from"./ActionGroup-BCzfYI9o.js";import{s as u}from"./Action-CE7P3CGA.js";import{J as f,h as O,L as V}from"./DateField-CzdQyLGA.js";import{D as o}from"./DateRangePicker-MxGpp7fW.js";import{F as d}from"./FieldDescription-C0wUj9vw.js";import{F as $}from"./useFieldComponent-D7Smil9s.js";import"./index-Cun1SEai.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./clsx-B-dksMZM.js";import"./index-DkEiVX-f.js";import"./Text-2_ekHeae.js";import"./browser-1QXSrBs6.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Text-DqFBqxgU.js";import"./utils-rjde634_.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./context-Cf_eXnNJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./IconWarning-CLSl9yKt.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVhMN4v1.js";import"./ProgressBar-CiugOVQS.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpP9sX_8.js";import"./useFocus-Cts5O1ED.js";import"./useFocusRing-rCVkEzcT.js";import"./useFocusable-CMpHMgWZ.js";import"./ContextMenuSection-D_Ue6SpG.js";import"./Dialog-CfTpgVgc.js";import"./RSPContexts-xO1N3or9.js";import"./OverlayArrow-iWeFoukr.js";import"./useControlledState-zpPREGnC.js";import"./Collection-CNWEIWZq.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./SelectionIndicator-H-x2PvD-.js";import"./Separator-DV0TabKR.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";import"./dynamic-CGQ0FoZ_.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./useStatic-BfPJwRSw.js";import"./context-B692btnM.js";import"./Form-BCVzxl1k.js";import"./Group-CwH8Xmuc.js";import"./Input-DxrKJDZ_.js";import"./useFormValidation-DUD5vlRz.js";import"./useFormReset-Cj0hiSlt.js";import"./useSpinButton-D5I5_loP.js";import"./useFilter-D2aBkU_n.js";import"./Popover-DSazfz_3.js";import"./useOverlayController-BcI7ttWx.js";import"./OverlayContextProvider-yb4dqhDz.js";import"./ClearPropsContextView-B81Rbv-y.js";import"./ClearPropsContext-1rzIpp4D.js";import"./RangeCalendar-Cj4FxATK.js";import"./Heading-CSLfLI3i.js";import"./useUpdateEffect-H0BRvIj7.js";import"./useMakeFocusable-ByjuM3xE.js";import"./react-children-utilities-OY5o0O78.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,q=_("submit"),er={title:"Integrations/React Hook Form/DateRangePicker",component:c,render:()=>{const r=async y=>{await u(1500),q(y)},R=l({defaultValues:{dateRangeDefaultValue:{start:f("2025-09-01"),end:f("2025-12-24")}}}),i=B();return e.jsx(p,{form:R,onSubmit:r,children:e.jsxs(L,{children:[e.jsx(i,{name:"dateRange",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeRequired",rules:{required:"Please select a date range"},children:e.jsx(o,{children:e.jsx(t,{children:"Date range"})})}),e.jsx(i,{name:"dateRangeMinValue",children:e.jsx(o,{minValue:O(V()),children:e.jsx(t,{children:"Future date range"})})}),e.jsx(k,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},n={},a={render:()=>{const r=l({defaultValues:{field:""}});return P.useEffect(()=>{r.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"}),e.jsx($,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const r=l({defaultValues:{field:""}});return e.jsxs(p,{form:r,onSubmit:async()=>await u(2e3),children:[e.jsx(c,{name:"field",children:e.jsxs(o,{children:[e.jsx(t,{children:"Future Date"}),e.jsx(d,{children:"Select a future date"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};var F,h,x;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,g,D;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
        </Field>
        <DateRangePicker isInvalid>
          <Label>Future Date</Label>
          <FieldDescription>Select a future date</FieldDescription>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DateRangePicker>
      </Form>;
  }
}`,...(D=(g=a.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var b,S,E;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DateRangePicker>
            <Label>Future Date</Label>
            <FieldDescription>Select a future date</FieldDescription>
          </DateRangePicker>
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
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};const rr=["Default","WithFieldError","WithFocus"];export{n as Default,a as WithFieldError,s as WithFocus,rr as __namedExportsOrder,er as default};
