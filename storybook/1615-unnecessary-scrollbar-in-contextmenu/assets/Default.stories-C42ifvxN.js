import{j as r}from"./iframe-CR8Ddg53.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-B_4O4CPt.js";import{L as m}from"./Link-CSy0RrcS.js";import{H as s}from"./HeaderNavigation-BA1KEQIr.js";import{B as o}from"./Button-Dau4z8hc.js";import{T as p}from"./Text-BErvAADj.js";import{I as C}from"./Image-CzJaDsZ4.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-fqNRucWl.js";import{a as y,C as A,M as c}from"./ContextMenuContent-DJeo2gNA.js";import"./ContextMenuSection-DT2fj72n.js";import{a as D,M as G}from"./Modal-BZgI70xY.js";import{H as E}from"./Heading-DbI53R5H.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BqN4v3Py.js";import"./mergeRefs-mV7XR32G.js";import"./index-Kj0ypInV.js";import"./useLocalizedStringFormatter-CsImQUVf.js";import"./context-CK3Xzdoe.js";import"./utils-CPU25MAw.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-_KFTzH0P.js";import"./useFocus-B62aW2Cd.js";import"./useFocusRing-RTREyv-v.js";import"./useFocusable-alsSoJVf.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CQuEQatc.js";import"./Button-DYYTgRSY.js";import"./ProgressBar-BTwhL8hz.js";import"./Label-BGtqz6Va.js";import"./Hidden-CcFqVLpr.js";import"./useLabel-Cs4Ke5Sw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-mRWe3g-L.js";import"./EmulatedBoldText-DQgoED4q.js";import"./Text-cGYhBKhC.js";import"./AlertIcon-B1n6uBWk.js";import"./Action-DHaG0aqo.js";import"./context-BXRR_TNN.js";import"./useStatic-PrBBNnv4.js";import"./getActionGroupSlot-DHUqTI33.js";import"./Popover-HdRbciH-.js";import"./DialogTriggerView-DftwNWn5.js";import"./Dialog-H-c5ZIEM.js";import"./RSPContexts-CzStg2xL.js";import"./OverlayArrow-CgdJalR5.js";import"./useControlledState-C1vKNjS4.js";import"./Collection-BsJXi1eq.js";import"./CollectionBuilder-BOVbIZYX.js";import"./Separator-DA11LE-f.js";import"./Group-DuGIesTy.js";import"./SearchField-yrOr7IhK.js";import"./FieldError-D80gKGFP.js";import"./Form-knrQXPF2.js";import"./useTextField-BXQ9ns67.js";import"./useFormReset-CWiQQPlL.js";import"./TextField-ipRwSBAP.js";import"./useEvent-rwuiNVtk.js";import"./SelectionManager-BaZzBhEG.js";import"./useCollator-DPpvLnMn.js";import"./FocusScope-BbJ4WC9_.js";import"./VisuallyHidden-D_HRp7SG.js";import"./Switch-Dl-WarHo.js";import"./Label-ZXYVd8nk.js";import"./useToggleState-Czl47aYr.js";import"./Overlay-2Rq5pg14.js";import"./Header-C1rqQ66U.js";import"./ButtonView-CB8BKik0.js";import"./Heading-UMlMpnou.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
