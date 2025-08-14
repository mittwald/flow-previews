import{j as r}from"./iframe-CxaV-_2O.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-D1KlvyS5.js";import{L as m}from"./Link-CQwOFPnV.js";import{H as s}from"./HeaderNavigation-4i0HCjsw.js";import{B as o}from"./Button-4xzDtBTb.js";import{T as p}from"./Text-BIjq1xdd.js";import{I as C}from"./Image-BHdzLWyA.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CugCEhBf.js";import{a as y,C as A,M as c}from"./ContextMenuContent-BC2NEKaC.js";import"./ContextMenuSection-DRRRslYb.js";import{a as D,M as G}from"./Modal-BWmdfBXr.js";import{H as E}from"./Heading-C_MzQWY5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-z-cWY8Dd.js";import"./mergeRefs-C1I7UQxo.js";import"./index-Bv-xhCU8.js";import"./useLocalizedStringFormatter-z8DhIEVV.js";import"./context-Cj-dJZ3y.js";import"./utils-DIYfzur0.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-C5E9TJvv.js";import"./useFocus-IPoI70H0.js";import"./useFocusRing-CW_TQqaA.js";import"./useFocusable-Y-_8tCBP.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BcxnB7eR.js";import"./Button-CSmp7O-R.js";import"./ProgressBar-B40XscyZ.js";import"./Label-CMom07rS.js";import"./Hidden-ib7KOmtl.js";import"./useLabel-CxTeeGsz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-DOb4XPLl.js";import"./EmulatedBoldText-Dg2hewFF.js";import"./Text-CkN05LTG.js";import"./AlertIcon-Cs-vquO4.js";import"./Action-B6ZniWyv.js";import"./context-EEeOWra-.js";import"./useStatic-BvJkPPln.js";import"./getActionGroupSlot-Gydu4YTC.js";import"./Popover-BEv0neQA.js";import"./DialogTriggerView-CCYfgzjG.js";import"./Dialog-BcGIOR88.js";import"./RSPContexts-CEJikpJX.js";import"./OverlayArrow-CSLKLpb3.js";import"./useControlledState-CfXHiewS.js";import"./Collection-CUgqaI6s.js";import"./CollectionBuilder-1JtBbuTz.js";import"./Separator-Cjyqlw0C.js";import"./Group-Iq-x4EK-.js";import"./SearchField-CI94D4yf.js";import"./FieldError-DeYp8bGg.js";import"./Form-Y2IMt8C-.js";import"./useTextField-7uSnsU3k.js";import"./useFormReset-CwuAQO3t.js";import"./TextField-DnRR4HPH.js";import"./useEvent-C38G0Vvw.js";import"./SelectionManager-BNj2TXCV.js";import"./useCollator-CO3LIzeI.js";import"./FocusScope-COp4d16A.js";import"./VisuallyHidden-DPnP-D6J.js";import"./Switch-DjUULvsW.js";import"./Label-DeXHoAKG.js";import"./useToggleState-D9CAS-DV.js";import"./Overlay-BecZzRoj.js";import"./ButtonView-CFzALhP0.js";import"./Heading-BofntgQO.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};
