import{j as r,r as P}from"./iframe-CwuqIU3i.js";import{a as p,u as d,F as c,t as B}from"./Form-C_LQ2LWw.js";import{L as t}from"./Label-B0BiyK3O.js";import{B as a}from"./Button-BqbqUci_.js";import{S as L}from"./Section-LUqPWyIZ.js";import{A as k}from"./ActionGroup-K4almCLG.js";import{s as l}from"./Action-Dz8VIf0X.js";import{J as u,h as O,L as V}from"./DateField-C_ohpXci.js";import{D as o}from"./DatePicker-BBREjgDH.js";import{F as $}from"./useFieldComponent-eP2W8yne.js";import"./index-Cun1SEai.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./clsx-B-dksMZM.js";import"./index-DdRMNQVP.js";import"./Text-Dbs8GmZM.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./utils-BNUN6Z86.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./IconWarning-DfuZN-Hc.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./ContextMenuSection-BU9M0i_t.js";import"./Dialog-BB45Hyg5.js";import"./RSPContexts-BJREWOlr.js";import"./OverlayArrow-DPamNpoY.js";import"./useControlledState-B3_Egg2G.js";import"./Collection-YYfkw6ZM.js";import"./CollectionBuilder-BkgyTACG.js";import"./SelectionIndicator-pORsGxIs.js";import"./Separator-OZJOm_uc.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";import"./dynamic-DTSFzVL0.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./useStatic-DLE3zC_Y.js";import"./context-B1E32d2Q.js";import"./Form-C1wZYKgN.js";import"./Group-OczM-V_0.js";import"./Input-Cwt17kbg.js";import"./useFormValidation-DK6PIssV.js";import"./useFormReset-BLDFw02N.js";import"./useSpinButton-7iNaRQOm.js";import"./useFilter-pt2OluMQ.js";import"./Popover-D__JW8z9.js";import"./useOverlayController-B8XIYbgT.js";import"./OverlayContextProvider-97LfiWf0.js";import"./ClearPropsContextView-fXO2DKoU.js";import"./ClearPropsContext-DGTEyAkG.js";import"./RangeCalendar-B98QEUnp.js";import"./Heading-C5Mr4Kjc.js";import"./useUpdateEffect-DUl2t4sp.js";import"./useMakeFocusable-ChwytvWt.js";import"./react-children-utilities-BfKePjVo.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,_=T("submit"),Xr={title:"Integrations/React Hook Form/DatePicker",component:p,render:()=>{const e=async g=>{await l(1500),_(g)},y=d({defaultValues:{dateDefaultValue:u("2025-09-01")}}),i=B();return r.jsx(c,{form:y,onSubmit:e,children:r.jsxs(L,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:O(V()),children:r.jsx(t,{children:"Future date"})})}),r.jsx(k,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},n={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return P.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx($,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var F,j,b;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(b=(j=n.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var E,D,S;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(D=m.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Zr as __namedExportsOrder,Xr as default};
