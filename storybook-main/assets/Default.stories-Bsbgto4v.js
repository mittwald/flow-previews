import{j as r}from"./iframe-DHE-6oks.js";import{D as B,$ as H,X as S,H as v,a0 as C}from"./IconWarning-Cic1MV-m.js";import{L as m}from"./Link-BMNsKwnm.js";import{H as s}from"./HeaderNavigation-Cbl6_TEq.js";import{B as o}from"./Button-DTmWymNY.js";import{T as p}from"./Text-DvqkAO4K.js";import{I as L}from"./Image-BHBdD-o5.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as y}from"./Avatar-B1REQ5W2.js";import{a as b,C as D,M as c}from"./ContextMenuContent-0OGraZPr.js";import"./ContextMenuSection-rhbKwxLA.js";import{a as A,s as G}from"./storyBackgrounds-GFSAi-dI.js";import{a as E,M as P}from"./Modal-3Z6Z6O8s.js";import{H as W}from"./Heading-jYuKOunx.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CehOxfFR.js";import"./mergeRefs-CXJw6JB3.js";import"./index-DuoRw6XS.js";import"./useLocalizedStringFormatter-DWrFqDaN.js";import"./context-DFltFWpJ.js";import"./utils-x8BQYX4-.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DKLIgAwR.js";import"./useFocus-DYGSM8hG.js";import"./useFocusRing-OVXrKScL.js";import"./useFocusable-BqyWOhG-.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CGq1_nld.js";import"./Button-Dx38wLWj.js";import"./ProgressBar-D7CY6Vap.js";import"./Label-CRHcOnwp.js";import"./Hidden-wM-8btK_.js";import"./useLabel-DfuADmFb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DInQ8S6B.js";import"./EmulatedBoldText-h05YTKz1.js";import"./Text-NjMLt3Ri.js";import"./AlertIcon-D7nJhHn9.js";import"./Action-VI9cAUPd.js";import"./context-C7gD2f3O.js";import"./useStatic-RbPw01cN.js";import"./getActionGroupSlot-BAwn8Ach.js";import"./Popover-CEn09y9m.js";import"./DialogTriggerView-B81Eu0Os.js";import"./Dialog-CmbCeDcm.js";import"./RSPContexts-B_OykxZB.js";import"./OverlayArrow-BzBmdrc3.js";import"./useControlledState-DtNNEi2b.js";import"./Collection-DvDkMv-D.js";import"./CollectionBuilder-DOrrKo3i.js";import"./Separator-s586xCfF.js";import"./Input-DW8k9amG.js";import"./SearchField-B1O_97SX.js";import"./FieldError-B9K2-GIk.js";import"./Form-B4xkNDou.js";import"./Group-DF6Pci-D.js";import"./useTextField-C3m2uMQS.js";import"./useFormReset-BToKGHXS.js";import"./TextField-D2dBDnFN.js";import"./SelectionManager-jb_M3DhH.js";import"./useEvent-DAUMmEgK.js";import"./useCollator-_wAd7c24.js";import"./FocusScope-DduXebcv.js";import"./VisuallyHidden-JQCaE509.js";import"./Switch-103x_V2T.js";import"./Label-CsrQ8fuF.js";import"./useToggleState-BSceVarM.js";import"./Overlay-2-41gIrB.js";import"./Header-D1Qhf-9g.js";import"./ButtonView-tNcZ1p3A.js";import"./Heading-eFzWwoOT.js";const to={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(B,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:n=>r.jsxs(s,{"aria-label":"Header navigation",...n,children:[r.jsx(o,{children:r.jsx(B,{})}),r.jsx(o,{children:r.jsx(H,{})}),r.jsxs(E,{children:[r.jsx(o,{children:r.jsx(S,{})}),r.jsx(P,{children:r.jsx(W,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(y,{children:r.jsx(L,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(D,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},a={args:{color:"dark"},parameters:{backgrounds:A}},i={args:{color:"light"},parameters:{backgrounds:G}};var d,g,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(g=t.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
