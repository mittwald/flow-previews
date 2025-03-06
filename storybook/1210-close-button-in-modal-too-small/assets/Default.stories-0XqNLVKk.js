import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{M as n}from"./Message-DVpUgY16.js";import{H as m}from"./Header-B2nFIf1k.js";import{B as l}from"./Button-DhoxjOB0.js";import{A as c}from"./Align-BNRIqXUd.js";import{A as d}from"./Avatar-BKIG8OWl.js";import{I as p}from"./Initials-BU40LVVA.js";import{C as h}from"./Content-B9uXJDfZ.js";import{T as r}from"./Text-D9M1FVhy.js";import{M as A}from"./MessageThread-DQgO5czf.js";import{c as L}from"./clsx-B-dksMZM.js";import{P as N,A as P,S as j}from"./flowComponent-BYduNA4_.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{T as F}from"./TextArea-C3BgqerV.js";import{v as R}from"./IconWarning-Cksp_dQT.js";import{F as B}from"./FileCardList-B2gKHITo.js";import{F as f}from"./FileCard--_q8AlkF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconApp-BlCDOz7i.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./index-IBhSrjl6.js";import"./LoadingSpinner-BNlvu0xK.js";import"./Button-BBWo3kGM.js";import"./utils-CzVyYWZn.js";import"./ProgressBar-B3uNJn7L.js";import"./Label-RYyxMwZH.js";import"./Hidden-DBxI3g91.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./react-children-utilities-fm2cgFnI.js";import"./onlyText-DBswRDk6.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./browser-B1A6F7LW.js";import"./Text-PTaPc_Ci.js";import"./dynamic-DKDa4OpU.js";import"./TextFieldBase-DkHM5SV5.js";import"./FieldDescription-DWIAfkTb.js";import"./FormField.module-BvsJ67Yi.js";import"./FieldError-DoW3KOQ8.js";import"./Form-D162gIjQ.js";import"./Input-DaA3cxmW.js";import"./useTextField-uM6U_XJE.js";import"./useFormReset-CilIRCFg.js";import"./useControlledState-4nfZ-XMX.js";import"./ColumnLayout-PRt2_-By.js";import"./Image-CoINy84f.js";import"./Link-BjZX4v19.js";const U="flow--chat",D="flow--chat--message-thread",H="flow--chat--file-card-list",W="flow--chat--controls",t={chat:U,messageThread:D,fileCardList:H,controls:W},i=s=>{const{height:w,className:I,children:S}=s,v=L(t.chat,I),y={MessageThread:{className:t.messageThread,tunnelId:"messageThread"},FileCardList:{className:t.fileCardList,tunnelId:"fileCardList"}};return e.jsx(N,{props:y,mergeInParentContext:!0,children:e.jsx("div",{style:{height:w},className:v,children:e.jsxs(P,{children:[e.jsx(j,{id:"messageThread"}),e.jsx("div",{className:t.controls,children:S}),e.jsx(j,{id:"fileCardList"})]})})})};i.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"Chat",props:{height:{required:!1,tsType:{name:'CSSProperties["height"]',raw:'CSSProperties["height"]'},description:""}},composes:["PropsWithChildren","PropsWithClassName"]};const ze={title:"Chat/Chat",component:i,parameters:{controls:{exclude:["className"]}},args:{height:500},render:s=>e.jsxs(i,{...s,children:[e.jsxs(A,{children:[e.jsxs(n,{children:[e.jsx(m,{children:e.jsxs(c,{children:[e.jsx(d,{children:e.jsx(p,{children:"Max Mustermann"})}),e.jsx(r,{children:e.jsx("b",{children:"Max Mustermann"})})]})}),e.jsx(h,{children:e.jsx(r,{children:x.long})})]}),e.jsxs(n,{type:"sender",children:[e.jsx(m,{children:e.jsxs(c,{children:[e.jsx(d,{children:e.jsx(p,{children:"John Doe"})}),e.jsx(r,{children:e.jsx("b",{children:"John Doe"})})]})}),e.jsx(h,{children:e.jsx(r,{children:x.long})})]})]}),e.jsx(F,{"aria-label":"message",rows:1,autoResizeMaxRows:4}),e.jsx(l,{color:"accent",children:"Submit"})]})},a={},o={render:s=>e.jsxs(i,{...s,children:[e.jsx(A,{children:e.jsxs(n,{children:[e.jsx(m,{children:e.jsxs(c,{children:[e.jsx(d,{children:e.jsx(p,{children:"Max Mustermann"})}),e.jsx(r,{children:e.jsx("b",{children:"Max Mustermann"})})]})}),e.jsx(h,{children:e.jsx(r,{children:x.long})})]})}),e.jsx(l,{color:"secondary",variant:"plain","aria-label":"file attachment",children:e.jsx(R,{})}),e.jsx(F,{"aria-label":"message",rows:1,autoResizeMaxRows:4}),e.jsx(l,{color:"accent",children:"Submit"}),e.jsxs(B,{children:[e.jsx(f,{name:"Uploaded File 1"}),e.jsx(f,{name:"Uploaded File 2"})]})]})};var u,g,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(C=(g=a.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var M,T,b;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <Chat {...props}>
      <MessageThread>
        <Message>
          <Header>
            <Align>
              <Avatar>
                <Initials>Max Mustermann</Initials>
              </Avatar>
              <Text>
                <b>Max Mustermann</b>
              </Text>
            </Align>
          </Header>
          <Content>
            <Text>{dummyText.long}</Text>
          </Content>
        </Message>
      </MessageThread>
      <Button color="secondary" variant="plain" aria-label="file attachment">
        <IconAttachment />
      </Button>
      <TextArea aria-label="message" rows={1} autoResizeMaxRows={4} />
      <Button color="accent">Submit</Button>
      <FileCardList>
        <FileCard name="Uploaded File 1" />
        <FileCard name="Uploaded File 2" />
      </FileCardList>
    </Chat>
}`,...(b=(T=o.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Ee=["Default","WithUpload"];export{a as Default,o as WithUpload,Ee as __namedExportsOrder,ze as default};
