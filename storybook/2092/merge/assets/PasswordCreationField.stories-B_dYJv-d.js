import{r as b,j as r}from"./iframe-DoVgBQr5.js";import{a as c,u as f,F as h,t as w}from"./Form-C01f8eVU.js";import{L as i}from"./Label-B_iGOO1o.js";import{B as o}from"./Button-2cUDiMZd.js";import{S as P}from"./Section-BB2ZqUlo.js";import{A as j}from"./ActionGroup-C1j2d8AL.js";import{s as F}from"./Action-5AgtWQtu.js";import{d as y,O as g,P as n,n as t,r as B}from"./PasswordCreationField-DBwPj5j4.js";import{e as S}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{F as E}from"./useFieldComponent-Dl5zd8_u.js";import"./index-nuYtCEEu.js";import"./flowComponent-KNPphWYF.js";import"./index-jEdNOdxF.js";import"./clsx-B-dksMZM.js";import"./index-CnXLT15x.js";import"./useLocalizedStringFormatter-C282_ari.js";import"./context-DKZO50eL.js";import"./browser-CTr_Jj6j.js";import"./Label.module-CUYTf9Jc.js";import"./Label-8ulleTCg.js";import"./utils-BUNxWnYj.js";import"./Hidden-VhCLrHg5.js";import"./IconWarning-BITNguYJ.js";import"./Text-DarT3iBq.js";import"./EmulatedBoldText-Ck3zADpv.js";import"./Text-BnwT6LTw.js";import"./LoadingSpinner-BjGFLica.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cf2Tt4tQ.js";import"./ProgressBar-i7FI2__w.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dokwxw5N.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CMEqlp6n.js";import"./useFocus-DgyX4ANK.js";import"./useFocusRing-C7RfsB5U.js";import"./useFocusable-CYiqpOWe.js";import"./ContextMenuSection-DNqsPT3L.js";import"./Dialog-BOL4Q97z.js";import"./RSPContexts-DwowBXaw.js";import"./OverlayArrow-F14P5UPi.js";import"./useControlledState-JsyFwj7N.js";import"./Collection-BP7ufpBw.js";import"./CollectionBuilder-DJiBT6Uj.js";import"./SelectionIndicator-DHuWhUvH.js";import"./Separator-Ck__hFdD.js";import"./SelectionManager-GAqkDmB6.js";import"./useEvent-CXpyXyC8.js";import"./useCollator-BaFQCUm3.js";import"./FocusScope-DbQQ9osx.js";import"./VisuallyHidden-BzJhkBGh.js";import"./dynamic-DslUBYil.js";import"./getActionGroupSlot-Cx2xgGVq.js";import"./useStatic-DVOn0oZR.js";import"./context-C0oFmp5D.js";import"./Group-DUVw5f5J.js";import"./Input-CUJOOTLM.js";import"./TextField-rHpyngO3.js";import"./Form-ISVWAvzv.js";import"./useTextField-BLEB3qS9.js";import"./useFormReset-DOuAY3sG.js";import"./useFormValidation-BBVxENjx.js";import"./FieldDescription-CycJT4it.js";import"./Tooltip-C0w1TLqB.js";import"./ClearPropsContextView-Ca7YEM0M.js";import"./ClearPropsContext-8Ai0JzP3.js";import"./ReactAriaControlledValueFix-B9MjC7lr.js";import"./ContextualHelpTrigger-Ce_DywJT.js";import"./Popover-23BYXG6-.js";import"./useOverlayController-CaB8twj3.js";import"./OverlayContextProvider-D10wv2mp.js";import"./OverlayTrigger-CMoG14I4.js";import"./ControlledNotification-zc0ciOkv.js";import"./Heading-B-ZtrlSM.js";import"./Heading-BDk_Xo8S.js";import"./useManagedValue-CAjxBzvX.js";import"./react-children-utilities-NLX1q1W1.js";const C=(e=y)=>{const a=b.useMemo(()=>g.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return S(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:V}=__STORYBOOK_MODULE_ACTIONS__,L=V("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[B.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},$r={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),L(s)},a=f({defaultValues:{user:""}}),m=w();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(P,{children:[r.jsx(m,{name:"user",rules:{required:"Jo dwag a password is required!"},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(j,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:C(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return b.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(policyDecl)
      }} name="password">
          <PasswordCreationField validationPolicy={policyDecl}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <PasswordCreationField defaultValue={""} isInvalid>
          <Label>Password</Label>
          <Button>asd</Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </PasswordCreationField>
        <PasswordCreationField defaultValue={""}>
          <Label>Password</Label>
          <Button>asd</Button>
        </PasswordCreationField>
      </Form>;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <PasswordCreationField>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
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
}`,...p.parameters?.docs?.source}}};const re=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,re as __namedExportsOrder,$r as default};
