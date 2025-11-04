import{j as r,r as j}from"./iframe-DO9N3msj.js";import{a as u,u as h,F as d,t as v}from"./Form-LlePpoBk.js";import{L as i}from"./Label-DMT-VAeC.js";import{B as c}from"./Button-DK3gLuJ3.js";import{S as f}from"./Section-CAvq1-xC.js";import{A as O}from"./ActionGroup-BuBCswp0.js";import{s as x}from"./Action-DxmtjQUu.js";import{q as n,n as e,p as b,F as k}from"./Modal-BlwfBR27.js";import"./index-nuYtCEEu.js";import"./dynamic-DUGX_GEz.js";import"./flowComponent-CBgkl_gr.js";import"./index-DPecbs7H.js";import"./clsx-B-dksMZM.js";import"./index-BKd7rs_c.js";import"./useLocalizedStringFormatter-DC2cqCZD.js";import"./context-BjTRJu3f.js";import"./browser-hD6iDIbH.js";import"./utils-Cu-DyEOs.js";import"./ProgressBar-DB2HZm0N.js";import"./Hidden-C-R9QW7n.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BWr56wBK.js";import"./Text-D7GNIHqq.js";import"./EmulatedBoldText-CL2lsqyO.js";import"./LoadingSpinner-k8RqOHze.js";import"./Button-CwTEoZMR.js";import"./useFocusRing-8nZAdgRB.js";import"./useFocusable-ahyCDO6Q.js";import"./Dialog-D3dWmtLO.js";import"./RSPContexts-dbdihzDr.js";import"./OverlayArrow-01aTrBGz.js";import"./useControlledState-1ES4-sD1.js";import"./Collection-BqBfIbeS.js";import"./CollectionBuilder-DBX3bBv7.js";import"./SelectionIndicator-BhMymJwE.js";import"./Separator-BF-SYlg1.js";import"./getActionGroupSlot-B34s0y1B.js";import"./useStatic-KZCckyWk.js";import"./context-CvI_nrYK.js";import"./Popover-CJ5gJoTU.js";import"./OverlayTrigger-Cc6aFNNE.js";import"./ControlledNotification-ChKUqlSP.js";import"./ClearPropsContextView-ClFJoQqW.js";import"./LayoutCard-BaL3uirn.js";import"./Accordion-DiNCZdh5.js";import"./Alert-CmVL1g9g.js";import"./AlertIcon-Cx9uM7rV.js";import"./AlertBadge-DKjjsjX1.js";import"./Align-4_9gR0EM.js";import"./TableFooterRow-CzNLyIYu.js";import"./SkeletonText-BzkksMdG.js";import"./Avatar-C8iI4XiR.js";import"./AvatarStack-5WxBj_Sw.js";import"./Badge-Dmk1cXNb.js";import"./BigNumber-BS_a1J_z.js";import"./Breadcrumb-DD7mAzkx.js";import"./Link-CUTcgav-.js";import"./Heading-DFXUXxT1.js";import"./Legend-kDyzBG5k.js";import"./FileCardList-CaIzS8B1.js";import"./Image-BQG4Mi23.js";import"./CodeBlock-IrVB4jA5.js";import"./CopyButton-D3R6S7E2.js";import"./Tooltip-CV32lKRB.js";import"./react-children-utilities-CCLuUO2m.js";import"./Color-Cq7q7xUW.js";import"./Content-o-E4J5v4.js";import"./ContextualHelpTrigger-DSsVPekU.js";import"./CounterBadge-BIZ0CqA0.js";import"./DonutChart-D-AmBtnm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bhlpa0-Q.js";import"./Header-Drz2V-xS.js";import"./Initials-95Z312bE.js";import"./InlineCode-CitufoKJ.js";import"./LabeledValue-DKTcLtzE.js";import"./PopoverTrigger-Igmj44kF.js";import"./Markdown-BIJUH9sl.js";import"./Separator-C5VUtYu8.js";import"./Message-uGgh4jCd.js";import"./MessageSeparator-BlXPxwBu.js";import"./NavigationGroup-2GwITB1t.js";import"./Notification-Dews6BSm.js";import"./NotificationProvider-EITiwGaZ.js";import"./ProgressBar-D0iIlwlS.js";import"./Rating-G-_Wb1CJ.js";import"./Skeleton-X_AsFCgX.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} isInvalid {...props}>
          <Label>Options</Label>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          <Checkbox value="4">Option 4</Checkbox>
          <Checkbox value="5">Option 5</Checkbox>
          <Checkbox value="6">Option 6</Checkbox>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxGroup>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
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
}`,...p.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{a as Default,l as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
