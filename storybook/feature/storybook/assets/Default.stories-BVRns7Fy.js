import{j as r}from"./iframe-ioB74BFE.js";import{D as B,$ as H,X as S,H as v,a0 as C}from"./IconWarning-DcmAhB0m.js";import{L as m}from"./Link-C8ygdi9S.js";import{H as s}from"./HeaderNavigation-OyngZTuX.js";import{B as o}from"./Button-MpugPYzI.js";import{T as p}from"./Text-BZaQwICB.js";import{I as L}from"./Image-649sdUSq.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-BHLrIZOF.js";import{a as b,C as D,M as c}from"./ContextMenuContent-uE6xE29v.js";import"./ContextMenuSection-VWKPQl1H.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-BByHtPAP.js";import{H as W}from"./Heading-CLweJIMG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DIQ-3Z-W.js";import"./mergeRefs-Bc9_QzvA.js";import"./index-DxUCKuoS.js";import"./useLocalizedStringFormatter-aWkOtTsz.js";import"./context-BPL8pm8m.js";import"./utils-B4cCkl7w.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-D3I07Rsr.js";import"./useFocus-Cm5D2sPa.js";import"./useFocusRing-CU7EmQP7.js";import"./useFocusable-2c5mTAR9.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DAUxEQn_.js";import"./Button-C3ElHjZf.js";import"./ProgressBar-6K_Q5ytM.js";import"./Label-Ci4HPtMl.js";import"./Hidden-BUUKH5FE.js";import"./useLabel-CB1mDCyy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-BI2T8H6c.js";import"./EmulatedBoldText-C5-k4pIu.js";import"./Text-CCXZaIsU.js";import"./AlertIcon-edb-Idvb.js";import"./Action-PE71Lbss.js";import"./context-hIhIfxI4.js";import"./useStatic-BxLAdQVw.js";import"./getActionGroupSlot-CF5EeO16.js";import"./Popover-rrnYjHMt.js";import"./DialogTriggerView-CvOFscXk.js";import"./Dialog-CftsoPvf.js";import"./RSPContexts-CvEKqGkH.js";import"./OverlayArrow-BGE95OS1.js";import"./useControlledState-DPunIX8S.js";import"./Collection-DiJArqpe.js";import"./CollectionBuilder-BSEB-cLG.js";import"./Separator-RUGTe1Gb.js";import"./Input-Bztt3-Ug.js";import"./SearchField-D30c1-ND.js";import"./FieldError-Z5j2ND32.js";import"./Form-u9b0IMfB.js";import"./Group-DEqMnOwE.js";import"./useTextField-udwT8Fkv.js";import"./useFormReset-Ik_MynpH.js";import"./TextField-DC2JuRaU.js";import"./SelectionManager-BJVavWLX.js";import"./useEvent-WwaZxlmw.js";import"./useCollator-CLy1qn58.js";import"./FocusScope-Dmal2fI9.js";import"./VisuallyHidden-BOO0yHnw.js";import"./Switch-BZLuC3kf.js";import"./Label-Bf-bWzV0.js";import"./useToggleState-yYtDOzvo.js";import"./Overlay-BE7ImjF8.js";import"./Header-BU2CiQIR.js";import"./ButtonView-CrLDH0sU.js";import"./Heading-DlB0ufOw.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},i={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(M=(f=a.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,k,T;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(T=(k=i.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const eo=["Default","WithContextMenu","Dark","Light"];export{a as Dark,t as Default,i as Light,e as WithContextMenu,eo as __namedExportsOrder,to as default};
