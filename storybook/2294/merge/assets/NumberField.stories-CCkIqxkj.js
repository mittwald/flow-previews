import{j as r,r as x}from"./iframe-BAsHckrK.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-DSkmlm83.js";import{L as o}from"./Label-DVOhOuhT.js";import{B as p}from"./Button-CAoYj-yB.js";import{S as g}from"./Section-NIPDFOQA.js";import{A as b}from"./ActionGroup-CumlRKzq.js";import{s as u}from"./Action-WxgR-8km.js";import{N as t}from"./NumberField-n8cLgjR9.js";import{F as E}from"./FieldDescription-CD7ak6-M.js";import{F as S}from"./FieldError-ZX2j7DJQ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CGZuOMtH.js";import"./flowComponent-B65nQAul.js";import"./index-CyIJxzCh.js";import"./clsx-B-dksMZM.js";import"./index-Cf_R1xcK.js";import"./useLocalizedStringFormatter-CGl9WC2_.js";import"./context-BKg0mO6Y.js";import"./useRef-CAXD_NwY.js";import"./utils-AcXTY-LA.js";import"./useOverlayController-BBLTL3Hv.js";import"./context-BHkWm8Gn.js";import"./useStatic-CHwNqk00.js";import"./ButtonView-ANSEPiju.js";import"./browser-tZCM2k1B.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cla8ySRz.js";import"./Hidden-CitD2GXi.js";import"./IconWarning-DHq1gdF3.js";import"./remote-5f3Q71VQ.js";import"./Text-B__BY7tJ.js";import"./EmulatedBoldText-BuJbkCoS.js";import"./Text-CORhkzC6.js";import"./LoadingSpinner-fmonyGhO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-v8rEwTVX.js";import"./ProgressBar-BYgBobO-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Zs1yjNWV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BtuPSsUz.js";import"./useFocus-DSg5hzPG.js";import"./useFocusRing-PAL8hD_p.js";import"./useFocusable-DEw7yEFU.js";import"./ContextMenuSection-BquW4vGk.js";import"./Dialog-BI9ufNdz.js";import"./RSPContexts-CrAnBcro.js";import"./OverlayArrow-BEZkQ9dz.js";import"./useControlledState-DIA42IR3.js";import"./Collection-B6YyQZIk.js";import"./CollectionBuilder-Ciu-gQv8.js";import"./SelectionIndicator-ClkIlDZY.js";import"./Separator-ClsU7Cqa.js";import"./SelectionManager-DTu8mNRc.js";import"./useEvent-BI0qkTtn.js";import"./useCollator-1De53UJM.js";import"./FocusScope-BSJXv8u1.js";import"./VisuallyHidden-BIPiOxSh.js";import"./getActionGroupSlot-B1R4nGn3.js";import"./useFieldComponent-uzP_CJXZ.js";import"./useControlledHostValueProps-DIe9Ntlu.js";import"./FieldError-Ch8lYR65.js";import"./Form-BEcGmyNR.js";import"./Group-D8US-dbe.js";import"./Input-DVOtN3yU.js";import"./useFormValidation-l5tjlCjY.js";import"./useSpinButton-Cx5wjIt_.js";import"./useFormReset-BBc75pQ_.js";import"./useTextField-DFE5rIX1.js";import"./AlertText-CZdsx7H2.js";import"./AlertIcon-C2q1LJ0F.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,kr as default};
