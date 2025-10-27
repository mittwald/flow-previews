import{j as r,r as x}from"./iframe-DoVgBQr5.js";import{a as p,u as d,F as c,t as F}from"./Form-C01f8eVU.js";import{L as t}from"./Label-B_iGOO1o.js";import{B as a}from"./Button-2cUDiMZd.js";import{S as j}from"./Section-BB2ZqUlo.js";import{A as b}from"./ActionGroup-C1j2d8AL.js";import{s as l}from"./Action-5AgtWQtu.js";import{J as u,h as E,L as D}from"./DateField-Czdyp_OF.js";import{D as o}from"./DatePicker-cx9J-HvL.js";import{F as S}from"./useFieldComponent-Dl5zd8_u.js";import"./index-nuYtCEEu.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./clsx-B-dksMZM.js";import"./index-CnXLT15x.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./context-DKZO50eL.js";import"./browser-CTr_Jj6j.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-8ulleTCg.js";import"./utils-BUNxWnYj.js";import"./Hidden-VhCLrHg5.js";import"./IconWarning-BITNguYJ.js";import"./Text-DarT3iBq.js";import"./EmulatedBoldText-Ck3zADpv.js";import"./Text-BnwT6LTw.js";import"./LoadingSpinner-BjGFLica.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cf2Tt4tQ.js";import"./ProgressBar-i7FI2__w.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dokwxw5N.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CMEqlp6n.js";import"./useFocus-DgyX4ANK.js";import"./useFocusRing-C7RfsB5U.js";import"./useFocusable-CYiqpOWe.js";import"./ContextMenuSection-DNqsPT3L.js";import"./Dialog-BOL4Q97z.js";import"./RSPContexts-DwowBXaw.js";import"./OverlayArrow-F14P5UPi.js";import"./useControlledState-JsyFwj7N.js";import"./Collection-BP7ufpBw.js";import"./CollectionBuilder-DJiBT6Uj.js";import"./SelectionIndicator-DHuWhUvH.js";import"./Separator-Ck__hFdD.js";import"./SelectionManager-GAqkDmB6.js";import"./useEvent-CXpyXyC8.js";import"./useCollator-BaFQCUm3.js";import"./FocusScope-DbQQ9osx.js";import"./VisuallyHidden-BzJhkBGh.js";import"./dynamic-DslUBYil.js";import"./getActionGroupSlot-Cx2xgGVq.js";import"./useStatic-DVOn0oZR.js";import"./context-C0oFmp5D.js";import"./Form-ISVWAvzv.js";import"./Group-DUVw5f5J.js";import"./Input-CUJOOTLM.js";import"./useFormValidation-BBVxENjx.js";import"./useFormReset-DOuAY3sG.js";import"./useSpinButton-Ckt9YJ66.js";import"./useFilter-D_SwcM5E.js";import"./Popover-23BYXG6-.js";import"./useOverlayController-CaB8twj3.js";import"./OverlayContextProvider-D10wv2mp.js";import"./ClearPropsContextView-Ca7YEM0M.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./RangeCalendar-DM7HfWF0.js";import"./Heading-BDk_Xo8S.js";import"./useUpdateEffect-Cf0oZmIn.js";import"./useMakeFocusable-4hJKvVl2.js";import"./react-children-utilities-NLX1q1W1.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Hr={title:"Integrations/React Hook Form/DatePicker",component:p,render:()=>{const e=async h=>{await l(1500),g(h)},f=d({defaultValues:{dateDefaultValue:u("2025-09-01")}}),i=F();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:E(D()),children:r.jsx(t,{children:"Future date"})})}),r.jsx(b,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},m={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=d({defaultValues:{field:u("2025-09-01")}});return r.jsxs(c,{form:e,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
