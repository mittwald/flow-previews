import{r as v,j as r}from"./iframe-CwuqIU3i.js";import{a as c,u as f,F as h,t as O}from"./Form-C_LQ2LWw.js";import{L as i}from"./Label-B0BiyK3O.js";import{B as o}from"./Button-BqbqUci_.js";import{S as T}from"./Section-LUqPWyIZ.js";import{A as q}from"./ActionGroup-K4almCLG.js";import{s as F}from"./Action-Dz8VIf0X.js";import{d as _,O as D,P as n,n as t,r as W}from"./PasswordCreationField-B31MzfPI.js";import{e as R}from"./isPromise-APPd_fLV-8tYzn7uh.js";import{F as A}from"./useFieldComponent-eP2W8yne.js";import"./index-Cun1SEai.js";import"./flowComponent-CW5hnf4o.js";import"./index-DCuX0QuH.js";import"./clsx-B-dksMZM.js";import"./index-DdRMNQVP.js";import"./Text-Dbs8GmZM.js";import"./browser-DUGYsxZ_.js";import"./EmulatedBoldText-DuSj7T8w.js";import"./Text-WRK6H0Wn.js";import"./utils-BNUN6Z86.js";import"./useLocalizedStringFormatter-CenpEZM_.js";import"./context-Cr--o0Ww.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ds7Yihzi.js";import"./Hidden-AzgHkXqa.js";import"./IconWarning-DfuZN-Hc.js";import"./LoadingSpinner-BmjVj-LQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BUhZq-tB.js";import"./ProgressBar-BzO_ljLZ.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CdaIPuHn.js";import"./useFocus-JEz06IDi.js";import"./useFocusRing-Csjn1IfN.js";import"./useFocusable-CYb_RHOH.js";import"./ContextMenuSection-BU9M0i_t.js";import"./Dialog-BB45Hyg5.js";import"./RSPContexts-BJREWOlr.js";import"./OverlayArrow-DPamNpoY.js";import"./useControlledState-B3_Egg2G.js";import"./Collection-YYfkw6ZM.js";import"./CollectionBuilder-BkgyTACG.js";import"./SelectionIndicator-pORsGxIs.js";import"./Separator-OZJOm_uc.js";import"./SelectionManager-Cunz5w8r.js";import"./useEvent-CWvMBd14.js";import"./useCollator-Vvi4fPh5.js";import"./FocusScope-AJCIL371.js";import"./VisuallyHidden-DO5WoARG.js";import"./dynamic-DTSFzVL0.js";import"./getActionGroupSlot-Bjm84Kbj.js";import"./useStatic-DLE3zC_Y.js";import"./context-B1E32d2Q.js";import"./Group-OczM-V_0.js";import"./Input-Cwt17kbg.js";import"./TextField-DH4M0LGG.js";import"./Form-C1wZYKgN.js";import"./useTextField-tXwlexz2.js";import"./useFormReset-BLDFw02N.js";import"./useFormValidation-DK6PIssV.js";import"./FieldDescription-CJ9p1yOe.js";import"./Tooltip-DfradJ05.js";import"./ClearPropsContextView-fXO2DKoU.js";import"./ClearPropsContext-DGTEyAkG.js";import"./ReactAriaControlledValueFix-D3IvEHi3.js";import"./ContextualHelpTrigger-VNb1TENJ.js";import"./Popover-D__JW8z9.js";import"./useOverlayController-B8XIYbgT.js";import"./OverlayContextProvider-97LfiWf0.js";import"./OverlayTrigger-CCvRkMKz.js";import"./ControlledNotification-2mKoGJJ0.js";import"./Heading-IfYlGqVo.js";import"./Heading-C5Mr4Kjc.js";import"./useManagedValue-D9jHPQWW.js";import"./react-children-utilities-BfKePjVo.js";const I=(e=_)=>{const a=v.useMemo(()=>D.fromDeclaration(e),[e]);return async m=>{if(!m)return!0;try{const s=await a.validate(m);return R(s.isValid)?await s.isValid:s.isValid}catch{return!1}}},{action:k}=__STORYBOOK_MODULE_ACTIONS__,M=k("submit"),x={minComplexity:3,rules:[{ruleType:t.length,min:8,max:12},{ruleType:t.sequence,sequences:[W.number],maxLength:2},{ruleType:t.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:t.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:t.hibp},{identifier:"special",ruleType:t.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:t.charPool,charPools:["numbers"],min:1,max:2},{ruleType:t.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Integrations/React Hook Form/PasswordCreationField",component:c,render:()=>{const e=async s=>{await F(1e3),M(s)},a=f({defaultValues:{user:""}}),m=O();return r.jsx(h,{form:a,onSubmit:e,children:r.jsxs(T,{children:[r.jsx(m,{name:"user",rules:{required:!0},children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx(q,{children:r.jsx(o,{type:"submit",children:"Submit"})})]})})}},d={},l={render:()=>{const e=f({defaultValues:{password:""}});return r.jsxs(h,{form:e,onSubmit:async a=>{await F(2e3),console.log("submitted",a)},children:[r.jsx(c,{rules:{required:!0,validate:I(x)},name:"password",children:r.jsxs(n,{validationPolicy:x,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(o,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})}},u={render:()=>{const e=f({defaultValues:{field:""}});return v.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsxs(n,{defaultValue:"",isInvalid:!0,children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"}),r.jsx(A,{children:"ErrorFromOuterFieldError!"})]}),r.jsxs(n,{defaultValue:"",children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})]})}},p={render:()=>{const e=f({defaultValues:{field:""}});return r.jsxs(h,{form:e,onSubmit:async()=>await F(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(n,{children:[r.jsx(i,{children:"Password"}),r.jsx(o,{children:"asd"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};var b,P,j;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(j=(P=d.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var w,y,B;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(y=l.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var g,S,E;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var C,V,L;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(V=p.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const ue=["Default","WithForm","WithFieldError","WithFocus"];export{d as Default,u as WithFieldError,p as WithFocus,l as WithForm,ue as __namedExportsOrder,le as default};
