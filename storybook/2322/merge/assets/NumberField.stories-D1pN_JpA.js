import{r as x,j as r}from"./iframe-DeaTJDua.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-dguijozO.js";import{L as o}from"./Label-DJdPs_mv.js";import{B as u}from"./Button-Cbxy7DVV.js";import{S as g}from"./Section-BH_SD1YF.js";import{A as b}from"./ActionGroup-BydBbbmr.js";import{s as p}from"./ActionBatch-RbyKfuct.js";import{N as t}from"./NumberField-BnlIYK2Z.js";import{F as E}from"./FieldDescription-B8HCsyh4.js";import{F as S}from"./FieldError-1N6EvFt7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-_cZQrmBt.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./clsx-B-dksMZM.js";import"./index-BmNXFkrE.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./context-DpHy2B7Z.js";import"./ActionGroupView-ZKtugs6_.js";import"./Content-CLiYZXIJ.js";import"./Heading-DNOFGRof.js";import"./Heading-Bb4nX13J.js";import"./RSPContexts-n2YtmRLP.js";import"./utils-DAn_19Le.js";import"./Text-DmX-Z1ax.js";import"./browser-DgW11PhP.js";import"./EmulatedBoldText-cuvIuyGo.js";import"./Text-D55T9z4A.js";import"./Modal-D3vemkDI.js";import"./Overlay-C4R6Qd88.js";import"./useOverlayController-DRqv1s8t.js";import"./useStatic-Die7f9lk.js";import"./OverlayContextProvider-BQrHrXvy.js";import"./LoadingSpinner-tY2JT6X0.js";import"./IconWarning-Bnohnd1u.js";import"./remote-4WWdz0S_.js";import"./Dialog-BDRpw9MJ.js";import"./Button-CkcG2vDz.js";import"./ProgressBar-GULdM67U.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C4fGorSC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BGs6tBRd.js";import"./useFocus-DwX8c8hl.js";import"./useFocusRing-CR3AbbfB.js";import"./useFocusable-DXFTvAH_.js";import"./OverlayArrow-seoLwAns.js";import"./useControlledState-CvKG4MPs.js";import"./Collection-BBtX_wi9.js";import"./CollectionBuilder-B2bzNwzm.js";import"./SelectionIndicator-C0I4_uDy.js";import"./Separator-D-1V8FhN.js";import"./SelectionManager-CxfZry6F.js";import"./useEvent-TDS_oy8g.js";import"./useCollator-DPWjVVbc.js";import"./FocusScope-CpKBh6MC.js";import"./VisuallyHidden-BMpCP5yc.js";import"./ButtonView-MbZrvuWF.js";import"./Flex-JXNPn7Yl.js";import"./useRef-DbGYr9ig.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CEBTY825.js";import"./getActionGroupSlot-DiYPO2W1.js";import"./useFieldComponent-Bk8CgTUl.js";import"./useControlledHostValueProps-BF8eq0rO.js";import"./FieldError-BF0ggQ3i.js";import"./Form-BdU1booJ.js";import"./Group-Dy6AvEDN.js";import"./Input-B9L4_sDl.js";import"./useFormValidation-Ca3G17wV.js";import"./useSpinButton-CAdBwIm_.js";import"./useFormReset-UTIDwNo9.js";import"./useTextField-DQvvweX9.js";import"./AlertText-CNiFry47.js";import"./AlertIcon-KKj1r8Dh.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Qr as __namedExportsOrder,Jr as default};
