import{j as r}from"./iframe-Djw2qN4N.js";import{u as H,a2 as S,_ as b,E as v,a3 as B}from"./IconWarning-CGeyKArL.js";import{L as m}from"./Link-C2b0Iizq.js";import{H as s}from"./HeaderNavigation-BSf2Fi_s.js";import{B as o}from"./Button-DbUzlGPh.js";import{T as p}from"./Text-N2Xlqf-I.js";import{I as C}from"./Image-BH97yIW-.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-HPcrS7GU.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CGAiRdiA.js";import"./ContextMenuSection-BEABfHKC.js";import{a as D,M as E}from"./Modal-ClQS6TnN.js";import{H as G}from"./Heading-CEZ2AJaG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CTcixsmb.js";import"./mergeRefs-wyRtFOcD.js";import"./index-BTrHPcFI.js";import"./useLocalizedStringFormatter-A4R3Jnzo.js";import"./context-SMG2uflK.js";import"./utils-DHksHmrI.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DmhdXdf4.js";import"./useFocus-qvLuoihW.js";import"./useFocusRing-zh24oNHk.js";import"./useFocusable-C2MDV8K7.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-DRHSwImm.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Cmn8DEd4.js";import"./ProgressBar-jq0-4j1i.js";import"./Label-BqIGEZIR.js";import"./Hidden-CQXH1kLj.js";import"./useLabel-Cdum_nIm.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-CF3hFWtX.js";import"./EmulatedBoldText-CB7N4Qe6.js";import"./Text-wW5QNV-A.js";import"./AlertIcon-Bh52D1Hu.js";import"./Action-U7vDxNUW.js";import"./context-D5-d9F9A.js";import"./useStatic-DLgn7tpr.js";import"./getActionGroupSlot-jleWxawA.js";import"./Popover-BxXe92TW.js";import"./DialogTriggerView-Cii_d7-u.js";import"./Dialog-S7NRO65S.js";import"./RSPContexts-BWg1RNKY.js";import"./OverlayArrow-BC79QONy.js";import"./useControlledState-3RrKoOGV.js";import"./Collection-BBr6vmvw.js";import"./CollectionBuilder-nkz2VjEe.js";import"./Separator-_-XVNxdO.js";import"./Group-CPAHFVqL.js";import"./SearchField-3KlsKxhn.js";import"./FieldError-CaVGVfZY.js";import"./Form-fQWPP7Lo.js";import"./useTextField-YfVJ_Q8A.js";import"./useFormReset-Ciz8aHP_.js";import"./TextField-CI5mY1Ro.js";import"./useEvent-Dc_urDPd.js";import"./SelectionManager-VfQb8aC7.js";import"./useCollator-IeylOfPf.js";import"./FocusScope-xrFWyxY9.js";import"./VisuallyHidden-DfkyRh3Z.js";import"./Switch-VDhugp-V.js";import"./Label-DW829cz7.js";import"./useToggleState-BGJWHeBD.js";import"./Overlay-B0e35OVG.js";import"./ButtonView-C2C5B0ut.js";import"./Heading-B7P3iAP_.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
