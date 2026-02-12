import{r as x,j as r}from"./iframe-C_XCETJ4.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-DlCnoRdL.js";import{L as o}from"./Label-C05Lio9F.js";import{B as p}from"./Button-BRKehz01.js";import{S as g}from"./Section-BxK_Nbwa.js";import{A as b}from"./ActionGroup-CmEQbpco.js";import{s as u}from"./ActionBatch-TqepIOEV.js";import{N as t}from"./NumberField-B_ekMLP_.js";import{F as E}from"./FieldDescription-9KiMe7M1.js";import{F as S}from"./FieldError-Cv_CJ9jj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DjbOT4dP.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./clsx-B-dksMZM.js";import"./index-BzhLFU3i.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./context-CpOW4Kl4.js";import"./useRef-DPssy75n.js";import"./utils-Bso2FrGw.js";import"./ButtonView-CkPSl8Kd.js";import"./browser-BQl26QHV.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./IconWarning-D8ZYq2sU.js";import"./remote-BBIBCAlv.js";import"./Text-l7AxHvJY.js";import"./EmulatedBoldText-D4ZS6afz.js";import"./Text-CpxVEUdG.js";import"./LoadingSpinner-dY4_o8YP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIlWiE4j.js";import"./ProgressBar-D_N9hIFl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQxA1BA6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B-xR971w.js";import"./useFocus-D-vzktAn.js";import"./useFocusRing-Dl1uWSge.js";import"./useFocusable-CMVXl80p.js";import"./ContextMenuSection-D5WrvUWV.js";import"./Dialog-BbJdb0zX.js";import"./RSPContexts-PVsy4Zek.js";import"./OverlayArrow-DucIvLHR.js";import"./useControlledState-CeDypDyB.js";import"./Collection-CCUOgigu.js";import"./CollectionBuilder-DdGNM8fa.js";import"./SelectionIndicator-CpgeLwVt.js";import"./Separator-DVQsYJWe.js";import"./SelectionManager-u6LzT-I5.js";import"./useEvent-BcXuQ_We.js";import"./useCollator-CSjtRqd2.js";import"./FocusScope-f515rn4z.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./getActionGroupSlot-Cq5jnsjJ.js";import"./useStatic-CKCyvBOK.js";import"./context-BzuZVooY.js";import"./useFieldComponent-K9rhjMxn.js";import"./useControlledHostValueProps-sh2cWMdB.js";import"./FieldError-5QFQIGqn.js";import"./Form-Bpra3FZF.js";import"./Group-BtgHmZ3N.js";import"./Input-54bUd5Aj.js";import"./useFormValidation-CsbIfaDX.js";import"./useSpinButton-ie9tJtIg.js";import"./useFormReset-CmrFi5aC.js";import"./useTextField-DD8e8EGD.js";import"./AlertText-B-9KJ9sd.js";import"./AlertIcon-Bo1DHsRX.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};
